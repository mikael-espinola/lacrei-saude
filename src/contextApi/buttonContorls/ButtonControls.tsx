"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Props {
  isTrue: boolean;
  setIsTrue: (value: boolean) => void;
}

const ButtonContext = createContext<Props | undefined>(undefined);

const ButtonProvider = ({ children }: any) => {
  const [isTrue, setIsTrue] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    pathname !== "/especialidades" ? setIsTrue(true) : setIsTrue(false);
  }, [pathname]);

  return (
    <ButtonContext.Provider value={{ isTrue, setIsTrue }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonProvider;

export const useButtonProvider = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error(" Falha no carregamento do buttonProvider");
  }
  return context;
};
