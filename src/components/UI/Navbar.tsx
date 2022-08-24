import Image from "next/image";
import Link from "next/link";
import { BiExit, BiUserCircle } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="h-12 bg-primary fixed top-0 w-full text-white flex justify-between items-center z-50 shadow-md">
      <div className="ml-2">
        <Link href="/">
          <a>
            <Image src="/chatbot.png" alt="BOT's logo" width="40" height="40" />
          </a>
        </Link>
      </div>
      <div className="font-bold text-lg">TERMO DE ACEITE DE SUPORTE</div>
      <div className="flex space-x-1">
        {session && <span className="text-center">{session.user?.email}</span>}
        <BiUserCircle className="text-4xl text-end mr-2" />
        {session && (
          <button onClick={(e) => signOut()}>
            <BiExit className="text-4xl text-end" />
          </button>
        )}
      </div>
    </div>
  );
}
