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

  if (!props.asset)
    return (
      <div className="flex items-center justify-center">
        <span className="border border-blue-500 rounded p-2 bg-blue-500 text-white">
          Você precisa primeiro fornecer as informações básicas do ativo
        </span>
      </div>
    );

  return (
    <div>
      {manifest?.sections.map((section) => (
        <div key={section.id}>{section.name}</div>
      ))}
    </div>
  );
}
