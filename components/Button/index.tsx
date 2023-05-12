import Image from "next/image";

import styles from "./button.module.scss";

import { ButtonType } from "./types";

export default function Button(props: ButtonType) {
  const { label, iconSource, bordered, disabled, buttonStyles, onClickButton } =
    props;

  const handleClickButton = () => onClickButton();

  return (
    <button
      onClick={handleClickButton}
      disabled={disabled}
      className={`${styles.button} ${bordered ? styles.buttonBordered : ""} ${
        buttonStyles ? buttonStyles : ""
      }`}
    >
      {iconSource && <Image src={iconSource} alt="icon" />}
      <span className={styles.label}>{label}</span>
    </button>
  );
}
