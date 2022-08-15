import { NextPage } from "next";
import { AssetContextProvider } from "../../context/asset.context";

const NewManifestPage: NextPage = () => {
  return (
    <AssetContextProvider>
      <div>new manifest</div>
    </AssetContextProvider>
  );
};

export default NewManifestPage;
