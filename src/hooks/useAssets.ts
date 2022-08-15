import { Asset } from "@prisma/client";

export function useAsset() {
  return {
    addAsset: async (asset: Asset) => {},
  };
}
