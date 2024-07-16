import type { ReactNode } from "react";

export interface ITab {
  key: string;
  title: string;
  content: ReactNode;
}
