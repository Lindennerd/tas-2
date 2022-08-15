import type { NextPage } from "next";
import { AssetList } from "../components/Assets";
import { Filter } from "../components/UI";
import { AssetsContextProvider } from "../context/assets.context";

const Home: NextPage = () => {
  return (
    <>
      <AssetsContextProvider>
        <Filter />
        <AssetList />
      </AssetsContextProvider>
    </>
  );
};

export default Home;
