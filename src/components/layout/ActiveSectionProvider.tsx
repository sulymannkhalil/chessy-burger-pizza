"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

type ActiveSectionContextValue = {
  pathname: string;
  activeSection: string;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue>({
  pathname: "/",
  activeSection: "hero",
});

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const value = useActiveSection();
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  return useContext(ActiveSectionContext);
}
