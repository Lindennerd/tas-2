import { ManifestForm } from "@/components/Manifests/ManifestForm";
import { Stepper, Paper } from "@/components/UI";
import { Button, Typography } from "@material-tailwind/react";
import { NextPage } from "next";
import { AssetForm } from "../../components/Assets";

import { ReactNode, useState } from "react";

const NewAsset: NextPage = () => {
  return (
    <div className="p-8 space-y-2">
      <Typography variant="h5" className="mb-2 text-center">
        Cadastro de Novo Ativo
      </Typography>

      <Stepper
        steps={[
          {
            label: "Informações básicas do Ativo",
            component: (
              <Paper>
                <AssetForm />
              </Paper>
            ),
          },
          {
            label: "Manifesto",
            component: (
              <Paper>
                <ManifestForm />
              </Paper>
            ),
          },
        ]}
      ></Stepper>
    </div>
  );
};

export default NewAsset;
