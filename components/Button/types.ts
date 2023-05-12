import { CSSProperties } from "react";
import { StaticImageData } from "next/image";

export type ButtonType = {
  label: string;
  bordered?: boolean;
  disabled?: boolean;
  iconSource: StaticImageData;
  buttonStyles?: CSSProperties;
  onClickButton: () => void;
};
