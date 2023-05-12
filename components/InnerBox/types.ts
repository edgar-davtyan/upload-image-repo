import { ReactNode } from "react";

export type InnerBoxType = {
  children: ReactNode;
  innerBoxStyle?: any;
  onClickInnerBox?: () => void;
};
