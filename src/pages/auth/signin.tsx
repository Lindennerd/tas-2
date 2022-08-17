//import LoginLayout from "@/components/LoginLayout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
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
    <>
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
      <div className="flex space-x-4 items-center justify-center">
        <form method="post" action="/api/auth/signin/ldap">
          <Card>
            <CardBody>
              <Typography variant="h5" className="mb-2 text-center">
                LDAP
              </Typography>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="space-y-2">
                <Input label="Usuário" name="username" />
                <Input label="Senha" name="password" type={"password"}></Input>
              </div>
            </CardBody>
            <CardFooter divider>
              <Button type="submit">Entrar</Button>
            </CardFooter>
          </Card>
        </form>

        <form method="post" action="/api/auth/signin/email">
          <Card>
            <CardBody>
              <Typography variant="h5" className="mb-2 text-center">
                Email
              </Typography>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <Input label="Email" name="email" />
            </CardBody>
            <CardFooter divider>
              <Button type="submit">Enviar Email</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
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
