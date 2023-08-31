"use client";

import AuthModal from "@/components/AuthModal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //prevent any errors that might be caused of the serverside rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
