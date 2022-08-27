import { ExtensionInput, ExtensionUpdate } from "./../schemas/extension.schema";
import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";

enum TRPC {
  create = "extensions.create",
  update = "extensions.update",
}

export function useExtensionsService() {
  const { onError } = useOnError();

  const extensionsCreate = trpc.useMutation(TRPC.create, { onError });
  const extensionsUpdate = trpc.useMutation(TRPC.update, { onError });

  return {
    create: async (extension: ExtensionInput) => {
      return await extensionsCreate.mutateAsync(extension);
    },

    update: async (extension: ExtensionUpdate) => {
      return await extensionsUpdate.mutateAsync(extension);
    },
  };
}
