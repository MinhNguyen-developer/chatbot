"use client";
import { FC, useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

type Props = {};
const CrispChat: FC<Props> = () => {
  useEffect(() => {
    Crisp.configure("391bea1b-9e9b-4ee0-8d82-35cd737cafe1");
  }, []);
  return null;
};
export default CrispChat;
