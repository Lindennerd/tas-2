import {
  Section,
  SectionEdit,
  SectionInput,
  sectionInputSchema,
} from "../schemas/section.schema";
import { createContext, useContext, useEffect, useState } from "react";
import { useSections } from "../hooks";

interface ISectionContext {
  section: Section | null;
  isLoading: boolean;
  get: (id: string) => void;
  mutate: (section: SectionInput | SectionEdit) => Promise<void>;
}

const SectionContext = createContext<ISectionContext | null>(null);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error(
      "useSectionContext must be used within an SectionContextProvider"
    );
  }

  return context;
};

export function SectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [section, setSection] = useState<Section | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { add, edit, asset: fAsset, getAsset, loading } = useSections();

  function get(id: string) {
    getAsset(id);
  }

  useEffect(() => {
    setAsset(fAsset);
  }, [loading]);

  async function mutate(mutatingAsset: AssetInput) {
    setIsLoading(true);
    if (!section) {
      const newAsset = await addAsset(mutatingAsset);
      setAsset(newAsset);
      setIsLoading(false);
    } else {
      const edittedAsset = await editAsset({
        ...mutatingAsset,
        id: section.id,
      });
      setAsset(edittedAsset);
      setIsLoading(false);
    }
  }

  return (
    <SectionContext.Provider
      value={{ section: section, isLoading: loading && isLoading, get, mutate }}
    >
      {children}
    </SectionContext.Provider>
  );
}
