import styles from "./pannel.module.scss";

import { PannelTypes } from "./types";

export default function Pannel(props: PannelTypes) {
  const { pannelTitle, children, containerStyle } = props;

  return (
    <div
      className={`${styles.pannelContainer}  ${
        containerStyle ? containerStyle : ""
      }`}
    >
      <h4 className={styles.pannelTitle}>{pannelTitle}</h4>
      {children}
    </div>
  );
}
