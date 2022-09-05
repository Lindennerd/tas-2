import { AssetForm } from "@/components/Assets";
import { Paper } from "@/components/UI";
import Loading from "@/components/UI/Loading";
import { trpc } from "@/utils/trpc";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function EditAssetPage() {
  const router = useRouter();

  const { data: asset, isLoading } = trpc.useQuery([
    "assets.findFirst",
    { id: router.query.id as string },
  ]);

  return (
    <div className="p-8 space-y-2">
      {isLoading && <Loading />}
      <Paper>
        <Typography variant="h5" className="mb-2 text-center">
          Informações básicas do ativo
        </Typography>
        {asset && (
          <AssetForm
            asset={{
              description: asset!.description,
              id: asset!.id,
              name: asset!.name,
              url: asset?.url ?? "",
            }}
          />
        )}
      </Paper>
      {asset && (
        <Paper>
          <Button
            className="w-full"
            variant="outlined"
            onClick={() => router.push(`/manifest/${asset.id}`)}
          >
            Editar Manifesto
          </Button>
        </Paper>
      )}
    </div>
  );
}
