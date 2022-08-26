import { useErrorContext } from "@/context/error.context";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

interface ManifestEditPageProps {}

export default function ManifestEditPage(props: ManifestEditPageProps) {
  const router = useRouter();
  const { id } = router.query;

  const { setError } = useErrorContext();

  const {
    data: manifest,
    isLoading,
    refetch,
  } = trpc.useQuery(
    [
      "manifest.findByAsset",
      {
        assetId: id ?? "",
      },
    ],
    { onError: (error) => setError(error.message) }
  );

  return <div>manifest edit</div>;
}
