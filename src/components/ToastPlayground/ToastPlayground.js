import React, { useContext, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = useContext(ToastContext);
  const [message, setMessage] = useState("");
  const [checkedVariant, setCheckedVariant] = useState("notice");

  function handleSubmit(e) {
    e.preventDefault();
    createToast(message, checkedVariant);

    setMessage("");
    setCheckedVariant("notice");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              const id = `variant-${variant}`;

              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    checked={checkedVariant === variant}
                    value={variant}
                    onChange={(e) => setCheckedVariant(e.target.value)}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
