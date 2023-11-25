import { useState, useEffect } from 'react';

export function useMediaQuery(width: number) {
  const query = `(min-width: ${width}px)`;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);

    return () => {
      media.removeListener(listener);
    };
  }, [matches, query]);

  return matches;
}