//import LoginLayout from "@/components/LoginLayout";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getProviders } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import { LoginLayout } from "../../components/Layouts";

const SignIn = ({
  csrfToken,
  providers,
}: {
  csrfToken: string;
  providers: any;
}) => {
  return (
    <div className="flex flex-col justify-center items-center justify-items-center space-y-5">
      <Head>
        <title>TAS</title>
      </Head>
      <div className="flex flex-col items-center">
        <a className="rounded-full border p-4 bg-primary h-20 w-20 shadow-lg">
          <Image
            src="/chatbot.png"
            alt="BOT's logo"
            width="40"
            height="40"
            className="align-middle"
          />
        </a>
        <h1 className="font-semibold">TAS - Termo de Aceite de Suporte</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>LDAP Login</h1>
        <form
          method="post"
          action="/api/auth/signin/ldap"
          className="p-2 border rounded-md flex flex-col justify-center items-center space-y-4 shadow-md"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="flex space-x-2 items-center">
            <label className="text-center">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="text-center">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>

      <hr className="border-2" />

      <div className="flex flex-col items-center justify-center">
        <h1>Email One Time Password</h1>
        <form
          method="post"
          action="/api/auth/signin/email"
          className="p-2 border rounded-md flex flex-col justify-center items-center space-y-4 shadow-md"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="flex space-x-2 items-center">
            <label className="text-center">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

SignIn.getLayout = function getLayout(page: ReactNode) {
  return <LoginLayout>{page}</LoginLayout>;
};

export async function getServerSideProps(context: CtxOrReq) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  return {
    props: { csrfToken, providers },
  };
}

export default SignIn;
