import { useErrorContext } from "@/context/error.context";
import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";

enum TRPC {
  findMany = "assets.findMany",
}

export default function useAssetService() {
  const { onError } = useOnError();

  function findMany(filter: string, page?: number, opts?: any) {
    return trpc.useQuery([TRPC.findMany, { filter, page: page ?? 0 }], {
      ...opts,
      onError,
    });
  }

  return {
    findMany,
  };
}
