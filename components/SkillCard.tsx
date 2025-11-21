'use client';

import { useState } from 'react';
import { Skill } from '@/lib/skills-data';

interface SkillCardProps {
  skill: Skill;
  treeColor: string;
  fallbackIcon: string;
}

export default function SkillCard({ skill, treeColor, fallbackIcon }: SkillCardProps) {
  const [imgSrc, setImgSrc] = useState(skill.icon);

  return (
    <div
      className="bg-slate-900/60 border-2 rounded-lg p-3 hover:border-opacity-60 hover:shadow-[0_0_20px] transition-all"
      style={{
        borderColor: treeColor + '40',
        '--hover-shadow-color': treeColor + '33',
      } as any}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="w-12 h-12 rounded border-2 overflow-hidden" style={{borderColor: treeColor}}>
          <img
            src={imgSrc}
            alt={skill.name}
            className="w-full h-full object-cover"
            onError={() => setImgSrc(fallbackIcon)}
          />
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded font-medium"
          style={{backgroundColor: treeColor + '30', color: treeColor}}
        >
          {skill.maxPoints > 1 ? `0/${skill.maxPoints}` : '0/1'}
        </span>
      </div>
      <h4 className="text-sm font-bold text-cyan-50 mb-1 line-clamp-2">{skill.name}</h4>
      <p className="text-xs text-cyan-100/60 line-clamp-3">{skill.description}</p>
      {skill.isCapstone && (
        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-purple-500/30 text-purple-300 border border-purple-500/50">
          Capstone
        </span>
      )}
      {skill.name === 'In-Round Crafting' && (
        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-orange-500/30 text-orange-300 border border-orange-500/50">
          MUST HAVE
        </span>
      )}
    </div>
  );
}
