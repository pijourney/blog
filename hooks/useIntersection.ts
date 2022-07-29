import { useEffect, useState } from "react";
const config = {
  root: null,
  rootMargin: "5% 0px -80%", // toggle true when element is at top of page.
  threshold: 0,
};
export const useIntersection = (element: HTMLElement | null) => {
  const [isVisible, setState] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState(1);
        return;
      }
      if (entry.boundingClientRect.top > 0) {
        setState(-1); // do things if below
      } else {
        setState(0);
      }
    }, config);
    if (element) {
      element && observer.observe(element);
      return () => element && observer.unobserve(element);
    }
  }, [element]);

  return isVisible;
};
