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
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Este repositorio contiene un microservicio de usuario desarrollado con [NestJS](https://nestjs.com/). El propósito de este microservicio es gestionar la información de los usuarios, proporcionando funcionalidades como creación, actualización, eliminación y consulta de usuarios.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/**: Contiene el código fuente del microservicio.
  - **modules/**: Agrupa los diferentes módulos del microservicio.
    - **user/**: Módulo principal para la gestión de usuarios.
      - **user.controller.ts**: Controlador para manejar las solicitudes HTTP relacionadas con usuarios.
      - **user.service.ts**: Servicio que contiene la lógica de negocio para la gestión de usuarios.
      - **user.module.ts**: Módulo que agrupa el controlador y el servicio de usuarios.
      - **user.entity.ts**: Entidad de TypeORM que define la estructura de la tabla de usuarios en la base de datos.
  - **app.module.ts**: Módulo principal de la aplicación que importa todos los módulos necesarios.
  - **main.ts**: Archivo de entrada que inicializa la aplicación NestJS.
- **test/**: Contiene las pruebas para el microservicio.
- **.env**: Archivo de configuración para las variables de entorno.
- **package.json**: Archivo de configuración del proyecto que incluye dependencias y scripts.
- **tsconfig.json**: Archivo de configuración de TypeScript.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
