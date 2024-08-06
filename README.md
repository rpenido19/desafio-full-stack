# Desafio Full Stack

Este projeto é uma aplicação de exemplo que demonstra uma integração com uma API externa, usando jQuery, Bootstrap e DataTables. Ele utiliza Laravel para o backend e requer a execução de comandos PHP e npm para desenvolvimento.

## Índice

-   [Instalação](#instalação)
-   [Configuração](#configuração)
-   [Execução](#execução)

## Instalação

1. **Clone o Repositório**

    Execute o seguinte comando para clonar o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/rpenido19/desafio-full-stack.git
    ```

2. **Navegue até o Diretório do Projeto**

    ```bash
    cd desafio-full-stack
    ```

3. **Instale as Dependências do PHP**

    Certifique-se de ter o [Composer](https://getcomposer.org/) instalado. Em seguida, instale as dependências do PHP:

    ```bash
    composer install
    ```

4. **Instale as Dependências do Front-End**

    Certifique-se de ter o [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados. Em seguida, instale as dependências do front-end:

    ```bash
    npm install
    ```

## Configuração

1. **Configure o Ambiente**

    Copie o arquivo `.env.example` para `.env` e ajuste as configurações conforme necessário. Você pode precisar configurar detalhes do banco de dados e outras variáveis de ambiente.

    ```bash
    cp .env.example .env
    ```

## Execução

1. **Inicie o Servidor PHP**

    Execute o seguinte comando para iniciar o servidor PHP integrado do Laravel:

    ```bash
    php artisan serve
    ```

    O servidor geralmente será iniciado em `http://127.0.0.1:8000`.

2. **Compile os Recursos do Front-End**

    Execute o seguinte comando para compilar os arquivos CSS e JS:

    ```bash
    npm run dev
    ```

3. **Abra o Projeto no Navegador**

    Navegue até o URL fornecido pelo servidor PHP (`http://127.0.0.1:8000` ou o que for exibido) para acessar a aplicação.

4. **Verifique a Tabela**

    A tabela será exibida com dados formatados e atualizados conforme especificado no script JavaScript.
