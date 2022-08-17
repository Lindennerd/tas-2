import { Button, Icon } from "@vechaiui/react";
import { BiSkipNext } from "react-icons/bi";
import { useAssetContext } from "../../context/asset.context";

export function NextButton() {
  const context = useAssetContext();
  console.log(context.asset);
  return (
    <Button
      disabled={!context.asset}
      color="primary"
      variant="outline"
      rightIcon={
        <Icon as={BiSkipNext} label="Avançar" className="ml-2 text-lg" />
      }
    >
      Avançar
    </Button>
  );
}
