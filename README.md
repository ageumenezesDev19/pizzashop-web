# PizzaShop Web

**PizzaShop Web** is a web application for pizzeria management, developed with React, TypeScript, and various modern libraries.

## Table of Contents

- [PizzaShop Web](#pizzashop-web)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [This project depends on a back-end built with TypeScript, Drizzle, ElysiaJS, and Docker to set up the database. With Docker installed, clone the project https://github.com/ageumenezesDev19/pizzashop-api, install the dependencies, configure the Docker containers, and run the application.](#this-project-depends-on-a-back-end-built-with-typescript-drizzle-elysiajs-and-docker-to-set-up-the-database-with-docker-installed-clone-the-project-httpsgithubcomageumenezesdev19pizzashop-api-install-the-dependencies-configure-the-docker-containers-and-run-the-application)
  - [Execution](#execution)
  - [Build the project for production:](#build-the-project-for-production)
  - [Preview the production build:](#preview-the-production-build)
  - [Run tests:](#run-tests)
  - [If it is not already created, create a .env file at the root of the project and add the following environment variables:](#if-it-is-not-already-created-create-a-env-file-at-the-root-of-the-project-and-add-the-following-environment-variables)
  - [Dependencies](#dependencies)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [PizzaShop Web](#pizzashop-web-1)
  - [Índice](#índice)
  - [Instalação](#instalação)
    - [Este projeto depende de um back-end feito com TypeScript, Drizzle, ElysiaJS e o Docker para configurar o banco de dados. Com o Docker instalado, clone o projeto https://github.com/ageumenezesDev19/pizzashop-api, instale as dependências, configure os containers do Docker e execute a aplicação.](#este-projeto-depende-de-um-back-end-feito-com-typescript-drizzle-elysiajs-e-o-docker-para-configurar-o-banco-de-dados-com-o-docker-instalado-clone-o-projeto-httpsgithubcomageumenezesdev19pizzashop-api-instale-as-dependências-configure-os-containers-do-docker-e-execute-a-aplicação)
  - [Execução](#execução)
  - [Para construir o projeto para produção:](#para-construir-o-projeto-para-produção)
  - [Para visualizar a build de produção:](#para-visualizar-a-build-de-produção)
  - [Para executar os testes:](#para-executar-os-testes)
  - [Se já não estiver criada, crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:](#se-já-não-estiver-criada-crie-um-arquivo-env-na-raiz-do-projeto-e-adicione-as-seguintes-variáveis-de-ambiente)
  - [Dependências](#dependências)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento-1)

## Installation

### This project depends on a back-end built with TypeScript, Drizzle, ElysiaJS, and Docker to set up the database. With Docker installed, clone the project https://github.com/ageumenezesDev19/pizzashop-api, install the dependencies, configure the Docker containers, and run the application.

1. Clone the PizzaShop Web repository:

    ```bash
    git clone https://github.com/ageumenezesDev19/pizzashop-web.git
    ```

2. Navigate to the project directory:

    ```bash
    cd pizzashop-web
    ```

3. Install the dependencies using `pnpm`:

    ```bash
    pnpm install
    ```

## Execution

To start the project in development mode:

```bash
pnpm run dev
```

## Build the project for production:

```bash
pnpm run build
```
## Preview the production build:

```bash
pnpm run preview
```

## Run tests:

```bash
pnpm run dev:test
```
or
```bash
pnpm playwright test
```
or
```bash
pnpm playwright test --ui
```

## If it is not already created, create a .env file at the root of the project and add the following environment variables:

```js
VITE_API_URL="http://localhost:3333"
VITE_ENABLE_API_DELAY=true
```

## Dependencies

	•	@hookform/resolvers: ^3.6.0
	•	@radix-ui/react-dialog: ^1.1.1
	•	@radix-ui/react-dropdown-menu: ^2.1.1
	•	@radix-ui/react-popover: ^1.1.1
	•	@radix-ui/react-select: ^2.1.1
	•	@radix-ui/react-separator: ^1.1.0
	•	@radix-ui/react-slot: ^1.1.0
	•	@tanstack/react-query: ^5.50.1
	•	add: ^2.0.6
	•	axios: ^1.7.2
	•	class-variance-authority: ^0.7.0
	•	clsx: ^2.1.1
	•	date-fns: ^3.6.0
	•	dlx: ^0.2.1
	•	dropdown-menu: ^0.1.1
	•	happy-dom: ^14.12.3
	•	input: ^1.0.1
	•	label: ^0.2.2
	•	localforage: ^1.10.0
	•	lucide-react: ^0.395.0
	•	match-sorter: ^6.3.4
	•	react: ^18.2.0
	•	react-day-picker: ^8.10.1
	•	react-dom: ^18.2.0
	•	react-helmet-async: ^2.0.5
	•	react-hook-form: ^7.52.0
	•	react-router-dom: ^6.23.1
	•	recharts: 2.13.0-alpha.4
	•	shadcn-ui: ^0.8.0
	•	skeleton: ^0.1.2
	•	sonner: ^1.5.0
	•	sort-by: ^1.2.0
	•	tailwind-merge: ^2.3.0
	•	tailwindcss-animate: ^1.0.7
	•	textarea: ^0.3.0
	•	zod: ^3.23.8

## Dependências de Desenvolvimento

	•	@playwright/test: ^1.45.3
	•	@rocketseat/eslint-config: ^2.1.0
	•	@testing-library/jest-dom: ^6.4.8
	•	@testing-library/react: ^16.0.0
	•	@testing-library/user-event: ^14.5.2
	•	@types/jest: ^29.5.12
	•	@types/node: ^20.10.4
	•	@types/react: ^18.2.43
	•	@types/react-dom: ^18.2.17
	•	@vitejs/plugin-react: ^4.2.1
	•	autoprefixer: ^10.4.16
	•	eslint: ^8.55.0
	•	eslint-plugin-simple-import-sort: ^10.0.0
	•	msw: ^2.3.4
	•	postcss: ^8.4.32
	•	prettier-plugin-tailwindcss: ^0.5.9
	•	tailwindcss: ^3.3.6
	•	typescript: ^5.2.2
	•	vite: ^5.0.8
	•	vitest: ^2.0.4


# PizzaShop Web

O **PizzaShop Web** é um aplicativo web para gerenciamento de pizzarias, desenvolvido com React, TypeScript, e diversas bibliotecas modernas.

## Índice

- [PizzaShop Web](#pizzashop-web)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [This project depends on a back-end built with TypeScript, Drizzle, ElysiaJS, and Docker to set up the database. With Docker installed, clone the project https://github.com/ageumenezesDev19/pizzashop-api, install the dependencies, configure the Docker containers, and run the application.](#this-project-depends-on-a-back-end-built-with-typescript-drizzle-elysiajs-and-docker-to-set-up-the-database-with-docker-installed-clone-the-project-httpsgithubcomageumenezesdev19pizzashop-api-install-the-dependencies-configure-the-docker-containers-and-run-the-application)
  - [Execution](#execution)
  - [Build the project for production:](#build-the-project-for-production)
  - [Preview the production build:](#preview-the-production-build)
  - [Run tests:](#run-tests)
  - [If it is not already created, create a .env file at the root of the project and add the following environment variables:](#if-it-is-not-already-created-create-a-env-file-at-the-root-of-the-project-and-add-the-following-environment-variables)
  - [Dependencies](#dependencies)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [PizzaShop Web](#pizzashop-web-1)
  - [Índice](#índice)
  - [Instalação](#instalação)
    - [Este projeto depende de um back-end feito com TypeScript, Drizzle, ElysiaJS e o Docker para configurar o banco de dados. Com o Docker instalado, clone o projeto https://github.com/ageumenezesDev19/pizzashop-api, instale as dependências, configure os containers do Docker e execute a aplicação.](#este-projeto-depende-de-um-back-end-feito-com-typescript-drizzle-elysiajs-e-o-docker-para-configurar-o-banco-de-dados-com-o-docker-instalado-clone-o-projeto-httpsgithubcomageumenezesdev19pizzashop-api-instale-as-dependências-configure-os-containers-do-docker-e-execute-a-aplicação)
  - [Execução](#execução)
  - [Para construir o projeto para produção:](#para-construir-o-projeto-para-produção)
  - [Para visualizar a build de produção:](#para-visualizar-a-build-de-produção)
  - [Para executar os testes:](#para-executar-os-testes)
  - [Se já não estiver criada, crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:](#se-já-não-estiver-criada-crie-um-arquivo-env-na-raiz-do-projeto-e-adicione-as-seguintes-variáveis-de-ambiente)
  - [Dependências](#dependências)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento-1)

## Instalação

### Este projeto depende de um back-end feito com TypeScript, Drizzle, ElysiaJS e o Docker para configurar o banco de dados. Com o Docker instalado, clone o projeto https://github.com/ageumenezesDev19/pizzashop-api, instale as dependências, configure os containers do Docker e execute a aplicação.



1. Clone o repositório do PizzaShop Web:

    ```bash
    git clone https://github.com/ageumenezesDev19/pizzashop-web.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd pizzashop-web
    ```

3. Instale as dependências usando o `pnpm`:

    ```bash
    pnpm install
    ```

## Execução

Para iniciar o projeto em modo de desenvolvimento:

```bash
pnpm run dev
```

## Para construir o projeto para produção:

```bash
pnpm run build
```
## Para visualizar a build de produção:

```bash
pnpm run preview
```

## Para executar os testes:

```bash
pnpm run dev:test
```
ou

```bash
pnpm playwright test
```
ou

```bash
pnpm playwright test --ui
```

## Se já não estiver criada, crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:


```js
VITE_API_URL="http://localhost:3333"
VITE_ENABLE_API_DELAY=true
```
## Dependências

	•	@hookform/resolvers: ^3.6.0
	•	@radix-ui/react-dialog: ^1.1.1
	•	@radix-ui/react-dropdown-menu: ^2.1.1
	•	@radix-ui/react-popover: ^1.1.1
	•	@radix-ui/react-select: ^2.1.1
	•	@radix-ui/react-separator: ^1.1.0
	•	@radix-ui/react-slot: ^1.1.0
	•	@tanstack/react-query: ^5.50.1
	•	add: ^2.0.6
	•	axios: ^1.7.2
	•	class-variance-authority: ^0.7.0
	•	clsx: ^2.1.1
	•	date-fns: ^3.6.0
	•	dlx: ^0.2.1
	•	dropdown-menu: ^0.1.1
	•	happy-dom: ^14.12.3
	•	input: ^1.0.1
	•	label: ^0.2.2
	•	localforage: ^1.10.0
	•	lucide-react: ^0.395.0
	•	match-sorter: ^6.3.4
	•	react: ^18.2.0
	•	react-day-picker: ^8.10.1
	•	react-dom: ^18.2.0
	•	react-helmet-async: ^2.0.5
	•	react-hook-form: ^7.52.0
	•	react-router-dom: ^6.23.1
	•	recharts: 2.13.0-alpha.4
	•	shadcn-ui: ^0.8.0
	•	skeleton: ^0.1.2
	•	sonner: ^1.5.0
	•	sort-by: ^1.2.0
	•	tailwind-merge: ^2.3.0
	•	tailwindcss-animate: ^1.0.7
	•	textarea: ^0.3.0
	•	zod: ^3.23.8

## Dependências de Desenvolvimento

	•	@playwright/test: ^1.45.3
	•	@rocketseat/eslint-config: ^2.1.0
	•	@testing-library/jest-dom: ^6.4.8
	•	@testing-library/react: ^16.0.0
	•	@testing-library/user-event: ^14.5.2
	•	@types/jest: ^29.5.12
	•	@types/node: ^20.10.4
	•	@types/react: ^18.2.43
	•	@types/react-dom: ^18.2.17
	•	@vitejs/plugin-react: ^4.2.1
	•	autoprefixer: ^10.4.16
	•	eslint: ^8.55.0
	•	eslint-plugin-simple-import-sort: ^10.0.0
	•	msw: ^2.3.4
	•	postcss: ^8.4.32
	•	prettier-plugin-tailwindcss: ^0.5.9
	•	tailwindcss: ^3.3.6
	•	typescript: ^5.2.2
	•	vite: ^5.0.8
	•	vitest: ^2.0.4
