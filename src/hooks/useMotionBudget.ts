import { useEffect, useState } from 'react';

export interface MotionBudget {
  reducedMotion: boolean;
  lowPowerMode: boolean;
  allowHeavyEffects: boolean;
}

const getInitialBudget = (): MotionBudget => {
  if (typeof window === 'undefined') {
    return { reducedMotion: false, lowPowerMode: false, allowHeavyEffects: true };
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
    deviceMemory?: number;
  }).connection;

  const saveData = !!connection?.saveData;
  const weakNetwork = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g';
  const lowCpu = (navigator.hardwareConcurrency || 8) <= 4;
  const lowMemory = ((navigator as Navigator & { deviceMemory?: number }).deviceMemory || 8) <= 4;
  const lowPowerMode = saveData || weakNetwork || lowCpu || lowMemory;

  return {
    reducedMotion,
    lowPowerMode,
    allowHeavyEffects: !reducedMotion && !lowPowerMode,
  };
};

export const useMotionBudget = (): MotionBudget => {
  const [budget, setBudget] = useState<MotionBudget>(getInitialBudget);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setBudget(getInitialBudget());

    update();
    media.addEventListener('change', update);
    window.addEventListener('online', update);

    return () => {
      media.removeEventListener('change', update);
      window.removeEventListener('online', update);
    };
  }, []);

  return budget;
};
