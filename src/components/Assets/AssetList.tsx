import { AssetOutput } from "@/schemas/asset.schema";
import { Tooltip } from "@material-tailwind/react";

interface AssetListProps {
  assets: AssetOutput[];
}

export function AssetList(props: AssetListProps) {
  return (
    <div className="p-2">
      <div className="flex flex-wrap gap-2">
        {props.assets &&
          props.assets.map((asset: AssetOutput) => (
            <Tooltip
              key={asset.id}
              content={asset.description}
              placement="bottom"
            >
              <div className="p-2 border rounded hover:shadow">
                {asset.name}
              </div>
            </Tooltip>
          ))}
      </div>
    </div>
  );
}
