'use client';

import { useEffect, useRef, useState } from 'react';
import { Skill, TREE_COLORS } from '@/lib/skills-data';

interface SkillTreeVisualProps {
  treeName: 'mobility' | 'survival' | 'conditioning';
  skills: Skill[];
}

export default function SkillTreeVisual({ treeName, skills }: SkillTreeVisualProps) {
  const [allocatedPoints, setAllocatedPoints] = useState<Record<string, number>>({});
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [treeWidth, setTreeWidth] = useState(360);
  const treeContainerRef = useRef<HTMLDivElement | null>(null);

  const treeColor = TREE_COLORS[treeName];
  const connectorHeight = 64;
  const fallbackIcons = {
    mobility: '/skills/mobility_tree.png',
    survival: '/skills/survival_tree.png',
    conditioning: '/skills/conditioning_tree.png',
  };

  useEffect(() => {
    if (!treeContainerRef.current || typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? {};
      if (width) {
        setTreeWidth(Math.round(width));
      }
    });

    observer.observe(treeContainerRef.current);
    return () => observer.disconnect();
  }, []);

  // Group skills by tier and position
  const skillsByTier: Record<number, { left?: Skill; center?: Skill; right?: Skill }> = {};
  skills.forEach((skill) => {
    if (!skillsByTier[skill.tier]) {
      skillsByTier[skill.tier] = {};
    }
    skillsByTier[skill.tier][skill.position] = skill;
  });

  const maxTier = Math.max(...skills.map(s => s.tier));

  const handleSkillClick = (skillId: string, maxPoints: number) => {
    setAllocatedPoints(prev => {
      const current = prev[skillId] || 0;
      const next = current >= maxPoints ? 0 : current + 1;
      return { ...prev, [skillId]: next };
    });
  };

  const handleImageError = (skillId: string) => {
    setImageErrors(prev => ({ ...prev, [skillId]: true }));
  };

  const totalPoints = Object.values(allocatedPoints).reduce((sum, points) => sum + points, 0);

  const SkillNode = ({ skill }: { skill: Skill }) => {
    const points = allocatedPoints[skill.id] || 0;
    const isMaxed = points >= skill.maxPoints;
    const isHovered = hoveredSkill === skill.id;
    const imgSrc = imageErrors[skill.id] ? fallbackIcons[treeName] : skill.icon;

    return (
      <div className="relative flex flex-col items-center">
        {/* Skill Icon */}
        <button
          onClick={() => handleSkillClick(skill.id, skill.maxPoints)}
          onMouseEnter={() => setHoveredSkill(skill.id)}
          onMouseLeave={() => setHoveredSkill(null)}
          className={`w-14 h-14 rounded-full border-[3px] overflow-hidden transition-all relative ${
            points > 0 ? 'border-opacity-100' : 'border-opacity-40'
          } ${isHovered ? 'scale-110' : ''}`}
          style={{
            borderColor: treeColor,
            boxShadow: isHovered ? `0 0 15px ${treeColor}80` : 'none',
            backgroundColor: points > 0 ? treeColor + '20' : '#1e293b',
          }}
        >
          <img
            src={imgSrc}
            alt={skill.name}
            className="w-full h-full object-cover"
            onError={() => handleImageError(skill.id)}
          />
          {/* Lock icon for unallocated skills */}
          {points === 0 && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </button>

        {/* Points Display */}
        <div
          className="mt-1 px-2 py-0.5 rounded-full text-xs font-bold border-2"
          style={{
            backgroundColor: points > 0 ? treeColor + '30' : '#000',
            borderColor: treeColor,
            color: treeColor,
          }}
        >
          {points}/{skill.maxPoints}
        </div>

        {/* Skill Name Tooltip on Hover */}
        {isHovered && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 border-2 rounded-lg p-3 w-64 shadow-xl" style={{ borderColor: treeColor }}>
            <h4 className="font-bold text-sm mb-1" style={{ color: treeColor }}>{skill.name}</h4>
            <p className="text-xs text-cyan-100/80 mb-2">{skill.description}</p>
            <div className="flex gap-2 flex-wrap">
              {skill.isCapstone && (
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-purple-500/30 text-purple-300 border border-purple-500/50">
                  Capstone
                </span>
              )}
              {skill.name === 'In-Round Crafting' && (
                <span className="inline-block text-xs px-2 py-0.5 rounded bg-orange-500/30 text-orange-300 border border-orange-500/50">
                  MUST HAVE
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // SVG Connection Lines Component
  const ConnectionLines = ({ fromTier, toTier }: { fromTier: number; toTier: number }) => {
    const fromSkills = skillsByTier[fromTier] || {};
    const toSkills = skillsByTier[toTier] || {};

    const fromPositions: Array<'left' | 'center' | 'right'> = [];
    const toPositions: Array<'left' | 'center' | 'right'> = [];

    if (fromSkills.left) fromPositions.push('left');
    if (fromSkills.center) fromPositions.push('center');
    if (fromSkills.right) fromPositions.push('right');

    if (toSkills.left) toPositions.push('left');
    if (toSkills.center) toPositions.push('center');
    if (toSkills.right) toPositions.push('right');

    const getXPos = (position: 'left' | 'center' | 'right', totalPositions: number): number => {
      const centerX = treeWidth / 2;
      if (totalPositions === 1) return centerX;
      if (totalPositions === 2) {
        const offset = 70;
        return position === 'left' ? centerX - offset : centerX + offset;
      }
      const offset = 90;
      if (position === 'left') return centerX - offset;
      if (position === 'right') return centerX + offset;
      return centerX;
    };

    const fromCount = fromPositions.length;
    const toCount = toPositions.length;
    const connections = fromPositions.flatMap((fromPos) =>
      toPositions.map((toPos) => ({
        fromPos,
        toPos,
        fromX: getXPos(fromPos, fromCount),
        toX: getXPos(toPos, toCount),
      }))
    );

    if (!connections.length) {
      return null;
    }

    return (
      <svg
        className="absolute pointer-events-none"
        viewBox={`0 0 ${treeWidth} ${connectorHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          top: `-${connectorHeight / 2}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${treeWidth}px`,
          height: `${connectorHeight}px`,
        }}
      >
        <defs>
          {connections.map((_, idx) => {
            const gradientId = `connector-${treeName}-${fromTier}-${toTier}-${idx}`;
            return (
              <linearGradient key={gradientId} id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={treeColor} stopOpacity="0.45" />
                <stop offset="60%" stopColor={treeColor} stopOpacity="0.25" />
                <stop offset="100%" stopColor={treeColor} stopOpacity="0.05" />
              </linearGradient>
            );
          })}
        </defs>
        {connections.map((connection, idx) => {
          const gradientId = `connector-${treeName}-${fromTier}-${toTier}-${idx}`;
          const isDirect = connection.fromPos === connection.toPos;
          const strokeWidth = isDirect ? 3 : 2.2;
          const totalConnections = connections.length;
          const midOffset = (idx - (totalConnections - 1) / 2) * 5;
          const curvePull = (connection.toX - connection.fromX) * 0.25;
          const midY = connectorHeight / 2 + midOffset;
          const pathD = `M ${connection.fromX} 0 C ${connection.fromX + curvePull} ${midY}, ${
            connection.toX - curvePull
          } ${midY}, ${connection.toX} ${connectorHeight}`;

          return (
            <g key={gradientId}>
              <path
                d={pathD}
                fill="none"
                stroke={treeColor}
                strokeWidth={strokeWidth + 1.2}
                strokeOpacity={0.08}
                strokeLinecap="round"
              />
              <path
                d={pathD}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div className="bg-gradient-to-b from-slate-950/80 to-blue-950/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 mb-12" style={{ borderColor: treeColor + '40' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: treeColor + '20', border: `2px solid ${treeColor}` }}>
            <img src={fallbackIcons[treeName]} alt={treeName} className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold capitalize" style={{ color: treeColor }}>
              {treeName} Tree
            </h3>
            <p className="text-cyan-100/60 text-sm">{skills.length} Skills</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <div className="text-3xl font-bold" style={{ color: treeColor }}>
            {totalPoints} Points
          </div>
          <p className="text-cyan-100/60 text-sm">Allocated</p>
        </div>
      </div>

      {/* Skill Tree Visual */}
      <div
        ref={treeContainerRef}
        className="relative mx-auto w-full max-w-2xl px-4 sm:px-6"
      >
        {Array.from({ length: maxTier }, (_, i) => i + 1).map((tier) => {
          const tierSkills = skillsByTier[tier] || {};
          const hasLeft = !!tierSkills.left;
          const hasCenter = !!tierSkills.center;
          const hasRight = !!tierSkills.right;

          // Calculate grid layout
          let gridCols = 'grid-cols-1';
          let justifyClass = 'justify-center';

          if (hasLeft && hasRight && !hasCenter) {
            gridCols = 'grid-cols-2';
            justifyClass = 'justify-center';
          } else if (hasLeft && hasCenter && hasRight) {
            gridCols = 'grid-cols-3';
            justifyClass = 'justify-center';
          }

          return (
            <div key={tier} className="relative mb-6">
              {/* Connection Lines from Previous Tier */}
              {tier > 1 && (
                <ConnectionLines fromTier={tier - 1} toTier={tier} />
              )}

              {/* Skills Row */}
              <div className={`grid ${gridCols} gap-3 ${justifyClass} place-items-center relative`}>
                {hasLeft && tierSkills.left && (
                  <div className="flex justify-center">
                    <SkillNode skill={tierSkills.left} />
                  </div>
                )}
                {hasCenter && tierSkills.center && (
                  <div className="flex justify-center">
                    <SkillNode skill={tierSkills.center} />
                  </div>
                )}
                {hasRight && tierSkills.right && (
                  <div className="flex justify-center">
                    <SkillNode skill={tierSkills.right} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Button */}
      {totalPoints > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setAllocatedPoints({})}
            className="px-6 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: treeColor + '20',
              border: `2px solid ${treeColor}`,
              color: treeColor,
            }}
          >
            Reset Points
          </button>
        </div>
      )}
    </div>
  );
}
