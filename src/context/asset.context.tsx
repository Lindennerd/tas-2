import { Asset } from "../schemas/asset.schema";
import { createContext, useContext, useEffect, useState } from "react";
import { useAssets } from "../hooks";
import { AssetInput } from "../schemas/asset.schema";
import { trpc } from "../utils/trpc";

interface IAssetContext {
  asset: Asset | null;
  isLoading: boolean;
  get: (id: string) => void;
  mutate: (asset: AssetInput) => Promise<void>;
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
  const [asset, setAsset] = useState<Asset | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { addAsset, editAsset, asset: fAsset, getAsset, loading } = useAssets();

  function get(id: string) {
    getAsset(id);
  }

  useEffect(() => {
    setAsset(fAsset);
  }, [loading]);

  async function mutate(mutatingAsset: AssetInput) {
    setIsLoading(true);
    if (!asset) {
      const newAsset = await addAsset(mutatingAsset);
      setAsset(newAsset);
      setIsLoading(false);
    } else {
      const edittedAsset = await editAsset({ ...mutatingAsset, id: asset.id });
      setAsset(edittedAsset);
      setIsLoading(false);
    }
  }

  return (
    <AssetContext.Provider
      value={{ asset, isLoading: loading && isLoading, get, mutate }}
    >
      {children}
    </AssetContext.Provider>
  );
}
