import { Asset } from "@prisma/client";
import { createContext, useContext, useState } from "react";
import { trpc } from "../utils/trpc";

interface IAssetContext {
  asset: Asset;
  isLoading: boolean;
  getAsset: (id: string) => void;
}

const AssetContext = createContext<IAssetContext | null>(null);

export const useAssetContext = () => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error(
      "useAssetsContext must be used within an AssetsContextProvider"
    );
  }

  return context;
};

export function AssetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [asset, setAsset] = useState<Asset>({} as Asset);
  const [enableGetAsset, setEnableGetAsset] = useState(true);
  const { isLoading } = trpc.useQuery(["assets.findFirst", { id: "" }], {
    enabled: enableGetAsset,
    onSuccess: (asset) => {
      setAsset(asset!);
      setEnableGetAsset(false);
    },
  });

  function getAsset(id: string) {
    setEnableGetAsset(true);
  }

  return (
    <AssetContext.Provider value={{ asset, isLoading, getAsset }}>
      {children}
    </AssetContext.Provider>
  );
}
