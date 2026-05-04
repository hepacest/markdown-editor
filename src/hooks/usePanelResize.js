import { useEffect, useState } from 'react';

const MIN_DIVIDER_POSITION = 20;
const MAX_DIVIDER_POSITION = 80;

export default function usePanelResize(containerRef) {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    if (!isResizing) {
      return undefined;
    }

    const onMouseMove = (event) => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const { left, width } = container.getBoundingClientRect();
      const offset = event.clientX - left;
      const next = Math.max(
        MIN_DIVIDER_POSITION,
        Math.min(MAX_DIVIDER_POSITION, (offset / width) * 100),
      );

      setDividerPosition(next);
    };

    const onMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [containerRef, isResizing]);

  return {
    dividerPosition,
    isResizing,
    startResizing: () => setIsResizing(true),
  };
}