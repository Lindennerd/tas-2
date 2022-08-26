import { ManifestForm } from "@/components/Manifests/ManifestForm";
import { Stepper, Paper } from "@/components/UI";
import { Button, Typography } from "@material-tailwind/react";
import { NextPage } from "next";
import { AssetForm } from "../../components/Assets";

import { useState } from "react";
import { AssetOutput } from "@/schemas/asset.schema";
import { useRouter } from "next/router";

const NewAsset: NextPage = () => {
  const [asset, setAsset] = useState<AssetOutput | null>(null);
  const router = useRouter();

  return (
    <div className="p-8 space-y-2">
      <Paper>
        <Typography variant="h5" className="mb-2 text-center">
          Informações básicas do ativo
        </Typography>
        <AssetForm setAsset={setAsset} />
      </Paper>
      {asset && (
        <Paper>
          <Button
            className="w-full"
            variant="outlined"
            onClick={() => router.push(`/manifest/${asset.id}`)}
          >
            Adicionar Manifesto
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default NewAsset;
