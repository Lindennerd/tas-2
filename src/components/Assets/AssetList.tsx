import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useAssetsContext } from "../../context/assets.context";
import { Filter, FilterForm } from "../UI";
import Loading from "../UI/Loading";

export function AssetList() {
  const context = useAssetsContext();
  const router = useRouter();

  function onSubmit(data: FilterForm) {
    context.get(data.filter);
  }

  useEffect(() => {
    context.get("");
  }, []);

  return (
    <div className="p-2">
      {context.isLoading && <Loading />}
      <div className="flex justify-between space-x-2">
        <Filter onSubmit={onSubmit} />
        <Button
          onClick={() => {
            router.push("/assets/new");
          }}
          className="p-2 space-x-1 flex items-center whitespace-nowrap"
          color="green"
        >
          <BiAddToQueue className="text-2xl" />
          <span>Novo Ativo</span>
        </Button>
      </div>
      <div>
        {context.assets &&
          context.assets.map((asset) => (
            <div key={asset.id} className="flex justify-between space-x-2">
              {asset.name}
            </div>
          ))}
      </div>
    </div>
  );
}
