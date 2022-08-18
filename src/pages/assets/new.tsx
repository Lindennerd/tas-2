import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { NextPage } from "next";
import { useState } from "react";
import { AssetForm } from "../../components/Assets";
import { AssetContextProvider } from "../../context/asset.context";

interface Step {
  label: string;
  value: string;
  component: React.ReactNode;
}

const NewAsset: NextPage = () => {
  const steps: Step[] = [
    {
      label: "Informações Básicas",
      value: "asset-details",
      component: <AssetForm />,
    },
    {
      label: "Manifesto",
      value: "manifest",
      component: <div>Manifest</div>,
    },
  ];

  return (
    <AssetContextProvider>
      <div className="p-8 space-y-2">
        <Typography variant="h5" className="mb-2 text-center">
          Cadastro de Novo Ativo
        </Typography>

        <Tabs value="asset-details">
          <TabsHeader>
            {steps.map((step) => (
              <Tab key={step.value} value={step.value}>
                {step.label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {steps.map((step) => (
              <TabPanel key={step.value} value={step.value} className="mt-6">
                {step.component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </AssetContextProvider>
  );
};

export default NewAsset;
