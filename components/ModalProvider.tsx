"use client";
import { FC, useEffect, useState } from "react";
import ProModal from "@/components/ProModal";

type Props = {};
const ModalProvider: FC<Props> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <ProModal />
    </>
  );
};
export default ModalProvider;
