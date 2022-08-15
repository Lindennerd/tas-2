import type { NextPage } from "next";
import { AssetList } from "../components/Assets";
import { AssetsContextProvider } from "../context/assets.context";

const Home: NextPage = () => {
  return (
    <>
      <AssetsContextProvider>
        <AssetList />
      </AssetsContextProvider>
    </>
  );
};

export default Home;
