import React, { createContext, useCallback, useState } from "react";
import useEscapeKey from "../../hooks/use-Keydown";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function createToast(message, checkedVariant) {
    const newToast = { message, variant: checkedVariant, id: Math.random() };
    const nextItems = [...toasts, newToast];
    setToasts(nextItems);
  }

  function closeToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  const handleEscape = useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey("Escape", handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, createToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
