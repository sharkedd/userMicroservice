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
  - **auth/**: Modulo principal de la autenticación de usuarios
    - **guards/**: Módulo que contiene los guards, clases que condicionan el manejo de la request
      - **auth.guard.ts/**: Authorization Guard, se autorizan rutas específicas cuando el usuario tenga ciertos permisos.
      - **role.guard.ts/**: Role-Based Authentication, se autorizan rutan específicas cuando el usuario tenga cierto rol.
    - **auth.controller.ts/**: Controlador para manejar solicitudes HTTP relacionadas con la autenticación del usuario.
    - **auth.module.ts/**: Módulo que agrupa el controlador y el servicio de autenticación
    - **auth.service.ts/**: Servicio que contiene la lógica de negocio para la autenticación de usuarios
    - **constant.ts/**: Firma digital que utiliza el JWToken
  - **dto/**: Módulo que contiene los DTO (Data transfer Object) para las solicitudes HTTP.
    - **create-user.dto.ts/**: Patrón de datos para la creación de usuario
    - **sign-in.dto.ts/**: Patrón de datos para el inicio de sesión
  - **enum/**: Módulo que contiene los Enums y Decoradores
    - **roles.decorator.ts/**: Decorador que permite especificar que roles tienen acceso a ciertas rutas
    - **user-type.enum.ts/**: Enum que define los roles de usuarios disponibles
  - **users/**: Módulo principal para la gestión de usuarios.
    - **user.entity.ts**: Entidad de TypeORM que define la estructura de la tabla de usuarios en la base de datos.
    - **users.controller.ts**: Controlador para manejar las solicitudes HTTP relacionadas con usuarios.
    - **users.service.ts**: Servicio que contiene la lógica de negocio para la gestión de usuarios.
    - **users.module.ts**: Módulo que agrupa el controlador y el servicio de usuarios.
  - **app.module.ts**: Módulo principal de la aplicación que importa todos los módulos necesarios.
  - **main.ts**: Archivo de entrada que inicializa la aplicación NestJS.
- **.env**: Archivo de configuración para las variables de entorno. Contiene el puerto en el que se ejecuta la app.


## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
