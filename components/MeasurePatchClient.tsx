'use client';

import { useEffect } from 'react';

export default function MeasurePatchClient() {
  useEffect(() => {
    if (typeof performance === 'undefined' || typeof performance.measure !== 'function') return;
    const original = performance.measure.bind(performance);
    const safeMeasure: typeof performance.measure = (...args) => {
      try {
        return original(...args);
      } catch {
        const fallbackName = typeof args[0] === 'string' && args[0] ? `${args[0]}-safe` : 'measure-patch-fallback';
        return original(fallbackName);
      }
    };
    performance.measure = safeMeasure;
    return () => {
      performance.measure = original;
    };
  }, []);

  return null;
}
