import { Typography } from "@material-tailwind/react";
import { NextPage } from "next";
import { AssetForm } from "../../components/Assets";
import { AssetContextProvider } from "../../context/asset.context";

const NewAsset: NextPage = () => {
  return (
    <AssetContextProvider>
      <div className="p-8">
        <Typography variant="h5" className="mb-2 text-center">
          Novo Ativo
        </Typography>
        <div className="border rounded-b-md p-2">
          <AssetForm />
        </div>
      </div>
    </AssetContextProvider>
  );
};

export default NewAsset;
