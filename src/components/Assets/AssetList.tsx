import { useFormatDate } from "@/hooks/useFormatDate";
import { AssetOutput } from "@/schemas/asset.schema";
import { Button, Tooltip } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Heading, Table, TableCell, TableRow } from "../UI/Table";

interface AssetListProps {
  assets: AssetOutput[];
}

export function AssetList(props: AssetListProps) {
  const formatDate = useFormatDate();
  const router = useRouter();

  const headings: Heading[] = [
    { label: "Nome" },
    { label: "Descrição" },
    { label: "URL" },
    { label: "Criado em" },
    { label: "Manifesto" },
    { label: "" },
  ];

  function gotoManifestPage(assetId: string) {
    router.push(`manifest/${assetId}`);
  }

  return (
    <div className="p-2">
      <Table headings={headings}>
        {props.assets &&
          props.assets.map((asset: AssetOutput) => (
            <TableRow key={asset?.id}>
              <TableCell>{asset?.name}</TableCell>
              <TableCell>{asset?.description}</TableCell>
              <TableCell>{asset?.url}</TableCell>
              <TableCell>{formatDate(asset?.createdAt)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={(e) => gotoManifestPage(asset!.id)}
                >
                  Ver Manifesto
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center justify-center">
                  <Button
                    className="p-1 rounded-full"
                    onClick={(e) => router.push(`assets/${asset?.id}`)}
                  >
                    <BiEdit className="text-lg" />
                  </Button>
                  <Button className="p-1 rounded-full" color="red">
                    <BiTrash className="text-lg" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </div>
  );
}
