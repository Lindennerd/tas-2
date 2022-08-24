import { AssetOutput } from "@/schemas/asset.schema";

export function AssetList({ assets }: { assets: AssetOutput[] }) {
  return (
    <div className="p-2">
      <div>
        {assets &&
          assets.map((asset) => (
            <div key={asset.id} className="flex justify-between space-x-2">
              {asset.name}
            </div>
          ))}
      </div>
    </div>
  );
}
