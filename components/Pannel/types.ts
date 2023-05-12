import { ReactNode, CSSProperties } from "react";

export type PannelTypes = {
  pannelTitle: string;
  children: ReactNode;
  containerStyle?: CSSProperties;
};
