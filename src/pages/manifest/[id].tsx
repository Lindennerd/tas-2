import { ManifestForm } from "@/components/Manifests/ManifestForm";
import { useErrorContext } from "@/context/error.context";
import { UnsavedChangesProvider } from "@/context/manifest.changes.context";
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
        assetId: (id as string) ?? "",
      },
    ],
    { onError: (error) => setError(error.message) }
  );

  return (
    <UnsavedChangesProvider>
      <ManifestForm manifest={manifest!} />
    </UnsavedChangesProvider>
  );
}
