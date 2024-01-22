import { useEffect, useRef } from "react";

/**
 * @param {number} duration fade 되는 소요 시간
 * @param {number} delay fade 될때까지 걸리는 시간
 * @returns {Object} 반환된 객체.
 * @property {HTMLElement} ref - HTML 엘리먼트에 대한 참조.
 * @property {Object} style - 투명도가 0으로 설정된 스타일을 나타내는 객체.
 * @property {number} style.opacity - 0으로 설정된 투명도 값.
 */
export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;
  console.log(duration);
  console.log(delay);
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};