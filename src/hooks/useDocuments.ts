import { AssetEdit, AssetInput } from "../schemas/asset.schema";
import { trpc } from "../utils/trpc";

export function useAsset() {
  const createAsset = trpc.useMutation(["assets.create"]);
  const editAsset = trpc.useMutation(["assets.edit"]);

  return {
    addAsset: async (asset: AssetInput) => {
      return await createAsset.mutateAsync(asset);
    },

    editAsset: async (asset: AssetEdit) => {
      return await editAsset.mutateAsync(asset);
    },
  };
}
