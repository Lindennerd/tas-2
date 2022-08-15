import { NextPage } from "next";
import { AssetForm } from "../../components/Assets";

const NewAsset: NextPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-center bg-slate-100 border">Novo Ativo</h1>
      <div className="border rounded-b-md p-2">
        <AssetForm />
      </div>
    </div>
  );
};

export default NewAsset;
