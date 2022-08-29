import { Section } from "@/schemas/section.schema";
import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";
enum TRPC {
  findByAsset = "manifest.findByAsset",
  addSection = "manifest.addSection",
}

export function useManifestService() {
  const { onError } = useOnError();

  const addSectionMutation = trpc.useMutation([TRPC.addSection], { onError });

  function findByAsset(assetId: string) {
    return trpc.useQuery([TRPC.findByAsset, { assetId }], { onError });
  }

  async function addSection(sectionId: string, manifestId: string) {
    return await addSectionMutation.mutateAsync({
      sectionId,
      manifestId,
    });
  }

  return {
    findByAsset,
    addSection,
  };
}
