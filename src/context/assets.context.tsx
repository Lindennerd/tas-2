import { useAssets } from "@/hooks";
import { Asset } from "../schemas/asset.schema";
import { createContext, useContext, useEffect, useState } from "react";
import { trpc } from "../utils/trpc";

interface IAssetsContext {
  assets: Asset[];
  isLoading: boolean;
  get: (filter: string) => void;
}

const AssetsContext = createContext<IAssetsContext | null>(null);

export const useAssetsContext = () => {
  const context = useContext(AssetsContext);
  if (!context) {
    throw new Error(
      "useAssetsContext must be used within an AssetsContextProvider"
    );
  }

  return context;
};

export function AssetsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getAssets, loading, assets: fAssets } = useAssets();

  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    setAssets(fAssets);
  }, [loading]);

  function get(filter?: string) {
    getAssets(filter);
  }

  return (
    <AssetsContext.Provider value={{ assets, isLoading: loading, get }}>
      {children}
    </AssetsContext.Provider>
  );
}
