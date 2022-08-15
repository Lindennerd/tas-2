import { AssetInput } from "../schemas/asset.schema";
import { trpc } from "../utils/trpc";

export function useAsset() {
  const createAsset = trpc.useMutation(["assets.create"]);

  return {
    addAsset: async (asset: AssetInput) => {
      return await createAsset.mutateAsync(asset);
    },
  };
}
