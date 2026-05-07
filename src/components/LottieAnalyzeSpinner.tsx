import React, { useEffect, useRef } from 'react';

const pulseAnimationData = {
  v: '5.7.6',
  fr: 60,
  ip: 0,
  op: 60,
  w: 64,
  h: 64,
  nm: 'pulse-loader',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'dot',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [32, 32, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [38, 38, 100] },
            { t: 30, s: [100, 100, 100] },
            { t: 60, s: [38, 38, 100] },
          ],
        },
      },
      shapes: [
        { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [34, 34] }, nm: 'Ellipse Path 1' },
        { ty: 'fl', c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 }, r: 1, nm: 'Fill 1' },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

const LottieAnalyzeSpinner: React.FC = () => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let destroyed = false;
    let instance: { destroy: () => void } | null = null;

    const mount = async () => {
      try {
        const mod = await import('lottie-web');
        if (destroyed || !containerRef.current) {
          return;
        }

        instance = mod.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: pulseAnimationData,
        });
      } catch {
        // Keep empty fallback so button text remains readable if lottie fails.
      }
    };

    mount();

    return () => {
      destroyed = true;
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return <span ref={containerRef} className="inline-block w-4 h-4" aria-hidden="true" />;
};

export default LottieAnalyzeSpinner;
