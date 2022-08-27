import type { NextPage } from "next";
import { AssetList } from "@/components/Assets";
import { useState } from "react";
import { useRouter } from "next/router";
import { Filter, FilterForm, Paper } from "@/components/UI";
import { Button } from "@material-tailwind/react";
import { BiAddToQueue } from "react-icons/bi";
import Loading from "@/components/UI/Loading";
import Pagination from "@/components/UI/Pagination";
import useAssetService from "@/hooks/useAssetService";

const Home: NextPage = () => {
  const router = useRouter();
  const { findMany } = useAssetService();
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);

  const { refetch, isLoading, data: assets } = findMany(filter, page);

  function onFilter(data: FilterForm) {
    setFilter(data.filter);
    refetch();
  }

  function goToNewAsset() {
    router.push("/assets/new");
  }

  return (
    <div className="space-y-2">
      {isLoading && <Loading />}
      <Paper>
        <div className="flex justify-between space-x-2">
          <Filter onSubmit={onFilter} />
          <Button
            onClick={() => goToNewAsset()}
            className="p-2 space-x-1 flex items-center whitespace-nowrap"
            color="green"
          >
            <BiAddToQueue className="text-2xl" />
            <span>Novo Ativo</span>
          </Button>
        </div>
      </Paper>
      <Paper>
        {assets && (
          <>
            <AssetList assets={assets} />
            <Pagination
              itensCount={assets?.length}
              next={() => setPage((curr) => curr + 1)}
              previous={() => setPage((curr) => curr - 1)}
              page={page}
            />
          </>
        )}
      </Paper>
    </div>
  );
};

export default Home;
