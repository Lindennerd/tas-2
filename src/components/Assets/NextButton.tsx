import { Button } from "@material-tailwind/react";
import { BiSkipNext } from "react-icons/bi";
import { useAssetContext } from "../../context/asset.context";

export function NextButton() {
  const context = useAssetContext();
  console.log(context.asset);
  return (
    <Button
      disabled={!context.asset}
      variant="outlined"
      className="p-2 flex items-center"
    >
      <span> Avançar</span> <BiSkipNext className="text-2xl" />
    </Button>
  );
}
