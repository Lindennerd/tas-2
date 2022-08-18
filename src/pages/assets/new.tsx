import { ManifestForm } from "@/components/Manifests/ManifestForm";
import { Tab, TabsComponent } from "@/components/UI";
import { Typography } from "@material-tailwind/react";
import { NextPage } from "next";
import { useState } from "react";
import { AssetForm } from "../../components/Assets";
import { AssetContextProvider } from "../../context/asset.context";

const NewAsset: NextPage = () => {
  const tabs: Tab[] = [
    {
      label: "Informações Básicas",
      value: "asset-details",
      component: (
        <AssetContextProvider>
          <AssetForm />
        </AssetContextProvider>
      ),
    },
    {
      label: "Manifesto",
      value: "manifest",
      component: (
        <AssetContextProvider>
          <ManifestForm />
        </AssetContextProvider>
      ),
    },
  ];

  return (
    <div className="p-8 space-y-2">
      <Typography variant="h5" className="mb-2 text-center">
        Cadastro de Novo Ativo
      </Typography>
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default NewAsset;
