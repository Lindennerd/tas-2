import { Asset } from "@prisma/client";
import { createContext, useContext, useState } from "react";
import { trpc } from "../utils/trpc";

interface IAssetsContext {
  assets: Asset[];
  isLoading: boolean;
  getAssets: (filter: string) => void;
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
  const [assets, setAssets] = useState<Asset[]>([]);
  const [enableGetAssets, setEnableGetAssets] = useState(true);
  const { isLoading } = trpc.useQuery(["assets.findMany", { filter: "" }], {
    enabled: enableGetAssets,
    onSuccess: (assets) => {
      setAssets(assets);
      setEnableGetAssets(false);
    },
  });

  function getAssets(filter: string) {
    setEnableGetAssets(true);
  }

  return (
    <AssetsContext.Provider value={{ assets, isLoading, getAssets }}>
      {children}
    </AssetsContext.Provider>
  );
}
