import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";
enum TRPC {
  findByAsset = "manifest.findByAsset",
}

export function useManifestService() {
  const { onError } = useOnError();

  function findByAsset(assetId: string) {
    return trpc.useQuery([TRPC.findByAsset, { assetId }], { onError });
  }

  return {
    findByAsset,
  };
}
