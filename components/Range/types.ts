import { FormEvent } from "react";

export type RangeType = {
  maxValue?: number;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
};
