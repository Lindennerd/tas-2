import { useErrorContext } from "@/context/error.context";
import { TRPCError } from "@trpc/server";

export default function useOnError() {
  const { setError } = useErrorContext();

  return {
    onError: function (error: any) {
      setError(error.message);
    },
  };
}
