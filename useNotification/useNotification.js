/**
 * 
 * @param {String} title 제목
 * @param {Object} options body, icon, image 등 전송할 모든 항목들
 * @returns {Function} Notification 기능 호출 함수
*/
export const useNotification = (title, options) => {

  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/notification
   */
  if (!("Notification" in window)) return;

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") new Notification(title, options);
        else return;
      });
    } else new Notification(title, options);
  };
  return fireNotif;
};