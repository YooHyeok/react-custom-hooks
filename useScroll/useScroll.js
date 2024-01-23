import { useState, useEffect } from "react";

/**
 * 
 * @returns {Object}
 * @property {number} scrollX window.scrollX에 대한 현재 값
 * @property {number} scrollY window.scrollY에 대한 현재 값
 */
export const useScroll = () => {
  const [state, setState] = useState({
    scrollX: 0,
    scrollY: 0,
  });
  const onScroll = (e) => {
    setState((current) => ({
      ...current,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    }));
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};