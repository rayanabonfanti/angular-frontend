# Projeto de Autenticação Básica com Angular

Este projeto é uma demonstração de um sistema de autenticação básica desenvolvido em Angular utilizando o Angular CLI 15.1.2, Node.js 16.15.1 e npm 8.11.0. Ele se comunica com um backend Spring Boot que oferece autenticação básica, e para isso, um proxy foi configurado para redirecionar as solicitações para o servidor.

## Tecnologias Utilizadas

- Angular CLI 15.1.2
- Node.js 16.15.1
- npm 8.11.0
- Proxy para comunicação com o servidor Spring Boot

## Configuração do Proxy

Para permitir a comunicação com o backend Spring Boot, foi configurado um proxy que redireciona as solicitações para o servidor. O arquivo de configuração do proxy, `proxy-config.json`, possui a seguinte configuração:

```ts
const PROXY_CONFIG = [
    {
        context: ['/serverBasicAuth'],
        target: 'http://localhost:8090/',
        //target: 'https://basic-auth-spring-boot.azurewebsites.net/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/serverBasicAuth': ''},
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;
```

## Endpoints de Comunicação

Os endpoints para comunicação com o backend são definidos no arquivo `endpoints.ts`. Este arquivo cria URLs para os serviços de login e para recuperar todos os clientes:

```ts
export function endpoints(host: string){
    return {
        login: `${host}` + '/authentication/login',
        getAllCustomers: `${host}` + '/api/customer/getAllCustomers'
    }
}
```

## Configuração do Ambiente

No arquivo `environment.ts`, a configuração do ambiente é definida. Aqui, é possível definir o host de comunicação com o servidor, usando as URLs definidas nos endpoints. A configuração permite a fácil alteração entre ambientes de desenvolvimento e produção:

```ts
import { endpoints } from "./endpoints";

export const environment = {
  production: false,
  title: "Project Basic Auth Angular",
  endpoint: endpoints('/serverBasicAuth')
};
```

## Uso

Este projeto utiliza a autenticação básica (Basic Auth) para se comunicar com o backend Spring Boot. As URLs são definidas nos endpoints e configuradas no ambiente. Para acessar o servidor e seus serviços protegidos, é necessário fornecer um nome de usuário e senha válidos.

## Estrutura do Projeto Angular

O projeto Angular segue uma estrutura organizada com componentes, serviços e configurações que facilitam o desenvolvimento e a comunicação com o backend Spring Boot.

## Status do Projeto

Versão: 0.0.0

## Contato

Para mais informações, entre em contato com [seu_email@exemplo.com].

## Contribuições

Este é um projeto de exemplo que visa demonstrar a configuração do Angular para comunicação com um backend Spring Boot que utiliza autenticação básica. Sinta-se à vontade para contribuir, corrigir bugs ou aprimorar a segurança da autenticação. Suas contribuições são bem-vindas!

Agradecemos a todos que contribuíram e nos inspiraram a criar este projeto.
