## Configuração Básica
após clonar o repositório, crie um arquivo .env na raiz do projeto e use as seguintes configurações

```
DATABASE_URL=file:./dev.db
NEXTAUTH_SECRET=dev-secret
NEXTAUTH_URL=http://localhost:3000
EMAIL_SERVER=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_USER=katelin68@ethereal.email
EMAIL_PASS=uUN25TD813r55zZc2b
LDAP_URI=ldap://ds.example.com:389
```

em dev usamos o ethereal mail (https://ethereal.email/). As credenciais estão na configuração acima.

## Rodando o projeto
```bash
cd ~/tas-2
npx prisma generate
npm install
npm run dev
```
## Migrations

Este projeto contem uma lista de migrations para o banco de dados, que guarda todos scripts de alteração de banco de dados.
Procure pela pasta ~/prisma/migrations.
Para aplica-las, use o comando abaixo

```bash
npx prisma db pull
```
## Acessando o banco de dados

Este projeto utiliza prisma ORM (https://www.prisma.io/)

Para acessar o banco de dados, utilize o comando abaixo

```bash
npx prisma studio
```