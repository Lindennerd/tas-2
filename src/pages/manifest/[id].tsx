import { ManifestForm } from "@/components/Manifests/ManifestForm";
import { UnsavedChangesProvider } from "@/context/manifest.changes.context";
import { useManifestService } from "@/hooks/useManifestService";
import { useRouter } from "next/router";

interface ManifestEditPageProps {}

export default function ManifestEditPage(props: ManifestEditPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const { findByAsset } = useManifestService();

  const { data: manifest } = findByAsset(id as string);

  return (
    <UnsavedChangesProvider>
      <ManifestForm manifest={manifest!} />
    </UnsavedChangesProvider>
  );
}
