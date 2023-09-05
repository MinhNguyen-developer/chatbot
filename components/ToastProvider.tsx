"use client";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

type Props = {};
const ToastProvider: FC<Props> = () => {
  return <Toaster />;
};

export default ToastProvider;
