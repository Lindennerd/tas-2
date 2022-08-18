import { useSession } from "next-auth/react";
import Link from "next/link";
import { TiDocument, TiUser, TiDocumentText } from "react-icons/ti";
import { MdWebAsset } from "react-icons/md";

export function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="fixed z-50 bg-secondary top-12 w-12 h-full text-white hover:w-40 hover:transition-[width] duration-500">
      <Link href="/documents">
        <a className="flex justify-start p-2 w-full overflow-hidden hover:bg-primary hover:border-l-white hover:border-l-2">
          <TiDocument className="text-2xl min-w-[32px]" />
          <span className="overflow-hidden ml-2 ">Documentos</span>
        </a>
      </Link>
      <Link href="/manifests">
        <a className="flex justify-start p-2 w-full overflow-hidden hover:bg-primary hover:border-l-white hover:border-l-2">
          <TiDocumentText className="text-2xl min-w-[32px]" />
          <span className="overflow-hidden ml-2 ">Manifestos</span>
        </a>
      </Link>
      <Link href="/users">
        <a className="flex justify-start p-2 w-full overflow-hidden hover:bg-primary hover:border-l-white hover:border-l-2">
          <TiUser className="text-2xl min-w-[32px]" />
          <span className="overflow-hidden ml-2 ">Usuarios</span>
        </a>
      </Link>
      <Link href="/assets">
        <a className="flex justify-start p-2 w-full overflow-hidden hover:bg-primary hover:border-l-white hover:border-l-2">
          <MdWebAsset className="text-2xl min-w-[32px]" />
          <span className="overflow-hidden ml-2 ">Ativos</span>
        </a>
      </Link>
    </div>
  );
}
