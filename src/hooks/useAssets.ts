import { Asset } from "@prisma/client";
import { useState } from "react";
import { AssetEdit, AssetInput } from "../schemas/asset.schema";
import { trpc } from "../utils/trpc";

export function useAssets() {
  const [enableGetAssets, setEnableGetAssets] = useState(false);
  const [filterParam, setFilterParam] = useState<string>("");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(false);

  const createAsset = trpc.useMutation(["assets.create"]);
  const editAsset = trpc.useMutation(["assets.edit"]);
  const { isLoading } = trpc.useQuery(
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

  return {
    loading,
    assets,
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

      if (!isLoading) {
        return assets;
      }
    },
  };
}
