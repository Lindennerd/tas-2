import { Button, Icon } from "@vechaiui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useAssetsContext } from "../../context/assets.context";
import { Filter, FilterForm } from "../UI";

export function AssetList() {
  const context = useAssetsContext();
  const router = useRouter();

  function onSubmit(data: FilterForm) {
    context.getAssets(data.filter);
  }

  useEffect(() => {
    context.getAssets("");
  }, []);

  return (
    <div className="p-2">
      <div className="flex justify-between space-x-2">
        <Filter onSubmit={onSubmit} />
        <Button
          onClick={() => {
            router.push("/assets/new");
          }}
          variant="solid"
          color="primary"
          leftIcon={
            <Icon as={BiAddToQueue} label="Novo Ativo" className="mr-2" />
          }
        >
          Novo Ativo
        </Button>
      </div>
      <div>Assets</div>
    </div>
  );
}
