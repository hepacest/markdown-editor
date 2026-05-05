import { useEffect, useRef } from 'react';

export default function useScrollSync(refA, refB) {
  const isSyncingA = useRef(false);
  const isSyncingB = useRef(false);

  useEffect(() => {
    const elA = refA.current;
    const elB = refB.current;
    if (!elA || !elB) return;

    const syncFromA = () => {
      if (isSyncingA.current) return;
      isSyncingB.current = true;
      const ratio = elA.scrollTop / (elA.scrollHeight - elA.clientHeight);
      elB.scrollTop = ratio * (elB.scrollHeight - elB.clientHeight);
      requestAnimationFrame(() => { isSyncingB.current = false; });
    };

    const syncFromB = () => {
      if (isSyncingB.current) return;
      isSyncingA.current = true;
      const ratio = elB.scrollTop / (elB.scrollHeight - elB.clientHeight);
      elA.scrollTop = ratio * (elA.scrollHeight - elA.clientHeight);
      requestAnimationFrame(() => { isSyncingA.current = false; });
    };

    elA.addEventListener('scroll', syncFromA);
    elB.addEventListener('scroll', syncFromB);

    return () => {
      elA.removeEventListener('scroll', syncFromA);
      elB.removeEventListener('scroll', syncFromB);
    };
  }, [refA, refB]);
}
