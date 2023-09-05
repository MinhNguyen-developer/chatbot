"use client";
import { FC } from "react";
import CrispChat from "@/components/CrispChat";

type Props = {};
const CrispProvider: FC<Props> = () => {
  return <CrispChat />;
};
export default CrispProvider;
