import { Asset } from "../schemas/asset.schema";
import { useState } from "react";
import { AssetEdit, AssetInput } from "../schemas/asset.schema";
import { trpc } from "../utils/trpc";

export function useAssets() {
  const [enableGetAssets, setEnableGetAssets] = useState(false);
  const [filterParam, setFilterParam] = useState<string>("");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(false);

  const [enableGetAsset, setEnableGetAsset] = useState(false);
  const [asset, setAsset] = useState<Asset | null>(null);
  const [idAsset, setIdAsset] = useState("");

  const createAsset = trpc.useMutation(["assets.create"]);
  const editAsset = trpc.useMutation(["assets.edit"]);
  const { isLoading: isLoadingAssets } = trpc.useQuery(
    ["assets.findMany", { filter: filterParam }],
    {
      enabled: enableGetAssets,
      onSuccess: (assets) => {
        setAssets(assets);
        setEnableGetAssets(false);
        setLoading(false);
      },
    }
  );

  const { isLoading: isLoadingAsset } = trpc.useQuery(
    ["assets.findFirst", { id: idAsset }],
    {
      enabled: enableGetAsset,
      onSuccess: (asset: Asset) => {
        setAsset(asset);
        setEnableGetAsset(false);
        setLoading(false);
      },
    }
  );

  return {
    loading,
    assets,
    asset,
    addAsset: async (asset: AssetInput) => {
      return await createAsset.mutateAsync(asset);
    },

    editAsset: async (asset: AssetEdit) => {
      return await editAsset.mutateAsync(asset);
    },

    getAssets: async (filter?: string) => {
      setFilterParam(filter ?? "");
      setEnableGetAssets(true);
      setLoading(true);

      if (!isLoadingAssets) {
        return assets;
      }
    },

    getAsset: async (id: string) => {
      setIdAsset(id);
      setEnableGetAsset(true);
      setLoading(true);

      if (!isLoadingAsset) {
        return asset;
      }
    },
  };
}
