/* Static Mapbox-like canvas wrapper that mirrors the DOM shape of mapgenie/mapbox embeds. */
'use client';

import { useEffect, useRef, useState } from 'react';

type MapBoxStaticProps = {
  imageSrc: string;
  alt: string;
};

const MIN_ZOOM = 0.8;
const MAX_ZOOM = 2.5;
const STEP = 0.2;

export default function MapBoxStatic({ imageSrc, alt }: MapBoxStaticProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const draw = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const img = imageRef.current;
    if (!canvas || !container || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = container.clientWidth || 800;
    const height = Math.max(480, Math.floor(width * 0.56));
    canvas.width = width;
    canvas.height = height;

    const ratio = Math.min(width / img.width, height / img.height) * zoom;
    const drawWidth = img.width * ratio;
    const drawHeight = img.height * ratio;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.12)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.22)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      imageRef.current = img;
      draw();
    };
    return () => {
      img.onload = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  useEffect(() => {
    draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom, isFullscreen]);

  useEffect(() => {
    const handleResize = () => draw();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const zoomIn = () => setZoom((z) => Math.min(z + STEP, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z - STEP, MIN_ZOOM));
  const toggleFullscreen = () => setIsFullscreen((f) => !f);

  return (
    <div
      id="map"
      ref={containerRef}
      className={`mapboxgl-map relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-950/80 ${
        isFullscreen ? 'fixed inset-4 z-50 shadow-2xl' : ''
      }`}
    >
      <div className="mapboxgl-canary" style={{ visibility: 'hidden' }} />
      <div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
        <canvas
          ref={canvasRef}
          className="mapboxgl-canvas block h-full w-full"
          tabIndex={0}
          aria-label={alt}
          role="region"
        />
      </div>

      <div className="mapboxgl-control-container pointer-events-none">
        <div className="mapboxgl-ctrl-top-left" />
        <div className="mapboxgl-ctrl-top-right flex flex-col gap-2 pr-2 pt-2">
          <div className="mapboxgl-ctrl mapboxgl-ctrl-group pointer-events-auto">
            <button
              type="button"
              className="mapboxgl-ctrl-fullscreen"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              onClick={toggleFullscreen}
            >
              <span className="mapboxgl-ctrl-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mapboxgl-ctrl-bottom-left">
          <div className="mapboxgl-ctrl" style={{ display: 'none' }}>
            <a
              className="mapboxgl-ctrl-logo"
              target="_blank"
              rel="noopener nofollow"
              href="https://www.mapbox.com/"
              aria-label="Mapbox logo"
            />
          </div>
        </div>
        <div className="mapboxgl-ctrl-bottom-right flex flex-col items-end gap-2 pb-3 pr-3">
          <div className="mapboxgl-ctrl mapboxgl-ctrl-group pointer-events-auto">
            <button
              className="mapboxgl-ctrl-zoom-in"
              type="button"
              title="Zoom in"
              aria-label="Zoom in"
              aria-disabled={zoom >= MAX_ZOOM}
              onClick={zoomIn}
            >
              <span className="mapboxgl-ctrl-icon" aria-hidden="true" />
            </button>
            <button
              className="mapboxgl-ctrl-zoom-out"
              type="button"
              title="Zoom out"
              aria-label="Zoom out"
              aria-disabled={zoom <= MIN_ZOOM}
              onClick={zoomOut}
            >
              <span className="mapboxgl-ctrl-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" aria-hidden />
      <div className="absolute bottom-2 left-2 rounded bg-black/70 px-3 py-1 text-xs font-semibold text-cyan-100 shadow">
        静态画布预览（点击右上角可切换全屏，使用 +/- 缩放）
      </div>
    </div>
  );
}
