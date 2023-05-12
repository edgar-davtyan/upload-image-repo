import { useState } from "react";

import { RangeType } from "./types";

import styles from "./range.module.scss";

export default function Range(props: RangeType) {
  const { maxValue, onChange } = props;

  const [value, setValue] = useState(0);

  const handleChangeValue = (event: any) => {
    const {
      target: { value },
    } = event;
    setValue(value);

    if (typeof onChange === "function") onChange(event);
  };

  return (
    <input
      type="range"
      value={value}
      max={maxValue}
      className={styles.range}
      onChange={handleChangeValue}
    />
  );
}
