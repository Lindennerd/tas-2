import { OptionInput } from "./../schemas/option.schema";
import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";

enum TRPC {
  create = "options.create",
}

export function useMultipleChoiceService() {
  const { onError } = useOnError();
  const createOption = trpc.useMutation([TRPC.create], { onError });
  const removeOption = trpc.useMutation(["options.delete"], {
    onError,
  });
  return {
    create: async (option: OptionInput) => {
      return await createOption.mutateAsync(option);
    },

    remove: async (id: string) => {
      return await removeOption.mutateAsync({ id });
    },
  };
}
