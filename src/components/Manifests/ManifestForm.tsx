import { useErrorContext } from "@/context/error.context";
import { AssetOutput } from "@/schemas/asset.schema";
import { trpc } from "@/utils/trpc";
import { useEffect } from "react";

interface ManifestFormProps {
  asset: AssetOutput;
}

export function ManifestForm(props: ManifestFormProps) {
  const { setError } = useErrorContext();

  const {
    data: manifest,
    isLoading,
    refetch,
  } = trpc.useQuery(
    [
      "manifest.findByAsset",
      {
        assetId: props.asset?.id ?? null,
      },
    ],
    { enabled: false, onError: (error) => setError(error.message) }
  );

  useEffect(() => {
    refetch();
  }, [props.asset]);

  return <div>{manifest && manifest.createdAt.toString()}</div>;
}
