<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

O projeto visa desenvolver uma aplicação de simulação para a geração do cartão de entrada e saída de um estacionamento, fornecendo informações detalhadas sobre o tempo de permanência do veículo no estacionamento e o valor final a ser pago utilizando a moeda local brasileira como referência.


## Pré-requisitos

Antes de iniciar, é necessário ter um banco de dados (à sua escolha) e a tecnologia [Redis](https://redis.io/) configurados em sua máquina. A porta de comunicação padrão para o Redis é 6379, mas você pode alterá-la de acordo com suas preferências. Além disso, é recomendável ter um editor de código, como o [VSCode](https://code.visualstudio.com/), para facilitar o trabalho com o código.

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Weslley049/Westacionamento>

# Acesse a pasta do projeto no terminal/cmd
$ cd Westacionamento

# Altere o arquivo .env para apontar para o seu banco e depois migre os dados das tabelas do banco

#Para migrar as tabelas do banco utilize o comando:
$ npx prisma migrate dev


# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```
### 🛠 Tecnologias Utilizadas

As seguintes ferramentas foram usadas na construção do projeto:
- [Nest.js](https://nestjs.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)
- [Bull](https://www.npmjs.com/package/bull?activeTab=readme)
- [Swagger](https://swagger.io/)
- [Prisma](https://www.prisma.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro)


### Status do Projeto 
<h4> 
	Projeto já pode ser utilizado. Esperando novas funcionalidades 🚀 
</h4>

