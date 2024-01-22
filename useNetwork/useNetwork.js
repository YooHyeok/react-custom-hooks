import { useState, useEffect } from "react";

/**
 * 온라인 여부 반환 및 
 * @param {Function} onChange useNetwork 훅 콜백함수, argument로 넘겨받은 online여부 기준으로 특정 기능 처리.
 *   @param {boolean} online - 현재 온라인 여부
 * @returns {boolean} 온라인 여부
 */
export const useNetwork = (onChange) => {
  /**
   * navigator.onLine : true/false
   * 현재 온라인 여부
   */
  const [status, setStatus] = useState(navigator.onLine);
  if (typeof onChange === "function") onChange(status);
  const handleChanage = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChanage);
    window.addEventListener("offline", handleChanage);
    return () => {
      window.removeEventListener("online", handleChanage);
      window.removeEventListener("offline", handleChanage);
    };
  }, []);
  return status;
};