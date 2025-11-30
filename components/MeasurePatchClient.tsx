'use client';

import { useEffect } from 'react';

export default function MeasurePatchClient() {
  useEffect(() => {
    if (typeof performance === 'undefined' || typeof performance.measure !== 'function') return;
    const original = performance.measure.bind(performance);
    performance.measure = (...args) => {
      try {
        return original(...args);
      } catch {
        return undefined;
      }
    };
    return () => {
      performance.measure = original;
    };
  }, []);

  return null;
}
