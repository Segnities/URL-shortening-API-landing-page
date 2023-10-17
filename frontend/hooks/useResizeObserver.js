import { useEffect, useState } from 'react';

export default function useResizeObserver(elementId = '__next') {
  const [clientWidth, setClientWidth] = useState(0);
  useEffect(() => {
    const root = document.getElementById(elementId);

    if (!root) {
      console.error(`Element with id "${elementId}" not found.`);
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      setClientWidth(entries[0]?.contentRect?.width);
    });
    resizeObserver.observe(root);

    return () => {
      resizeObserver.unobserve(root);
    };
  }, [elementId]);

  return { clientWidth };
}
