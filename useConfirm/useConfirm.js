export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function" && typeof onCancel !== "function") return;
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm("Success");
    } else {
      onCancel("Failed");
    }
  };
  return confirmAction;
};