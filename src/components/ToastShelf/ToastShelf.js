import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper} role="list" aria-label="variant options">
      {toasts?.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast variant={toast.variant} id={toast.id}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
