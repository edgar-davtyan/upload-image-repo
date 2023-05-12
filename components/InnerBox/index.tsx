import styles from "./innerBox.module.scss";

import { InnerBoxType } from "./types";

export default function InnerBox(props: InnerBoxType) {
  const { children, innerBoxStyle, onClickInnerBox } = props;

  return (
    <div className={`${styles.box} ${innerBoxStyle}`} onClick={onClickInnerBox}>
      {children}
    </div>
  );
}
