"use client"; // Important if using Next.js App Router

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./store";

interface Props {
  children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
