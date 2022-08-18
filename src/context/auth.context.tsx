import Loading from "@/components/UI/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface IAuthContext {}

const AuthContext = createContext<IAuthContext | null>(null);
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/auth/signin");
    }
  }, [router, session, status]);

  return (
    <AuthContext.Provider value={{}}>
      {status === "loading" ? <Loading /> : children}
    </AuthContext.Provider>
  );
}
