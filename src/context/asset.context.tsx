import { Asset } from "@prisma/client";
import { createContext, useContext, useState } from "react";
import { useAssets } from "../hooks";
import { AssetInput } from "../schemas/asset.schema";
import { trpc } from "../utils/trpc";

interface IAssetContext {
  asset: Asset;
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
  const [asset, setAsset] = useState<Asset>({} as Asset);
  const [enableGetAsset, setEnableGetAsset] = useState(true);
  const [idAsset, setIdAsset] = useState("");
  const [loading, setLoading] = useState(false);

  const { addAsset, editAsset } = useAssets();

  const { isLoading } = trpc.useQuery(["assets.findFirst", { id: idAsset }], {
    enabled: enableGetAsset,
    onSuccess: (asset: Asset) => {
      setAsset(asset!);
      setEnableGetAsset(false);
      setLoading(false);
    },
  });

  function get(id: string) {
    setIdAsset(id);
    setEnableGetAsset(true);
    setLoading(true);
  }

  async function mutate(mutatingAsset: AssetInput) {
    setLoading(true);
    if (!asset) {
      const newAsset = await addAsset(mutatingAsset);
      setAsset(newAsset);
      setLoading(false);
    } else {
      const edittedAsset = await editAsset({ ...mutatingAsset, id: asset.id });
      setAsset(edittedAsset);
      setLoading(false);
    }
  }

  return (
    <AssetContext.Provider value={{ asset, isLoading: loading, get, mutate }}>
      {children}
    </AssetContext.Provider>
  );
}
