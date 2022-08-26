import { createContext, ReactNode, useContext, useState } from "react";

const UnsavedChangesContext = createContext<{
  state: boolean;
  setState: (state: boolean) => void;
} | null>(null);

export function useUnsavedChangesContext() {
  const context = useContext(UnsavedChangesContext);
  if (!context) throw Error("UnsavedChanges context is null here");
  return context;
}

export function UnsavedChangesProvider({ children }: { children: ReactNode }) {
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);

  return (
    <UnsavedChangesContext.Provider
      value={{ state: unsavedChanges, setState: setUnsavedChanges }}
    >
      {children}
    </UnsavedChangesContext.Provider>
  );
}
