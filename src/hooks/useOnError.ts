import { useErrorContext } from "@/context/error.context";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";

export default function useOnError() {
  const { setError } = useErrorContext();

  return {
    onError: function (error: TRPCClientError<any>) {
      console.log("deu erro parsa");
      setError(JSON.parse(error.message)[0].message);
    },
  };
}
