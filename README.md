# Markdown Links

## Índice

- [1. Preámbulo 📝](#1-preámbulo-📝)
- [2. Resumen del proyecto 📄](#2-resumen-del-proyecto-📄)
- [3. Objetivos de aprendizaje 💪](#3-objetivos-de-aprendizaje-💪)
- [4. Diagrama de flujo ✍](#4-Diagrama-de-flujo-✍)
- [5. ¿Qué incluye la librería? 📚](#5-¿Qué-incluye-la-librería?-📚)
- [6. Instalacion ⚙️](#6-Instalacion-⚙️)

---

## 1. Preámbulo 📝

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto 📄

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

## 3. Objetivos de aprendizaje 💪

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### JavaScript

- [✔️] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [✔️] **Arrays (arreglos)**

    <details><summary>Links</summary><p>

  - [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  - [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  </p></details>

- [✔️] **Objetos (key, value)**

    <details><summary>Links</summary><p>

  - [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
  </p></details>

- [✔️] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

    <details><summary>Links</summary><p>

  - [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [✔️] **Funciones (params, args, return)**

    <details><summary>Links</summary><p>

  - [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  - [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  - [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [✔️] **Recursión o recursividad**

    <details><summary>Links</summary><p>

  - [Píldora recursión - YouTube Laboratoria Developers](https://www.youtube.com/watch?v=lPPgY3HLlhQ)
  - [Recursión o Recursividad - Laboratoria Developers en Medium](https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727)
  </p></details>

- [✔️] **Módulos de CommonJS**

    <details><summary>Links</summary><p>

  - [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
  </p></details>

- [✔️] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

    <details><summary>Links</summary><p>

  - [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
  </p></details>

- [✔️] **Promesas**

    <details><summary>Links</summary><p>

  - [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
  </p></details>

- [✔️] **Pruebas unitarias (unit tests)**

    <details><summary>Links</summary><p>

  - [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
  </p></details>

- [✔️] **Pruebas asíncronas**

    <details><summary>Links</summary><p>

  - [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
  </p></details>

- [ ] **Uso de mocks y espías**

    <details><summary>Links</summary><p>

  - [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
  </p></details>

- [ ] **Pruebas de compatibilidad en múltiples entornos de ejecución**

- [ ] **Uso de linter (ESLINT)**

- [✔️] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Node.js

- [✔️] **Instalar y usar módulos con npm**

    <details><summary>Links</summary><p>

  - [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
  </p></details>

- [✔️] **Configuración de package.json**

    <details><summary>Links</summary><p>

  - [package.json - Documentación oficial (en inglés)](https://docs.npmjs.com/files/package.json)
  </p></details>

- [✔️] **Configuración de npm-scripts**

    <details><summary>Links</summary><p>

  - [scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)
  </p></details>

- [✔️] **process (env, argv, stdin-stdout-stderr, exit-code)**

    <details><summary>Links</summary><p>

  - [Process - Documentación oficial (en inglés)](https://nodejs.org/api/process.html)
  </p></details>

- [✔️] **File system (fs, path)**

    <details><summary>Links</summary><p>

  - [File system - Documentación oficial (en inglés)](https://nodejs.org/api/fs.html)
  - [Path - Documentación oficial (en inglés)](https://nodejs.org/api/path.html)
  </p></details>

### Control de Versiones (Git y GitHub)

- [✔️] **Git: Instalación y configuración**

- [✔️] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [✔️] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

    <details><summary>Links</summary><p>

  - [Sitio oficial de GitHub Pages](https://pages.github.com/)
  </p></details>

- [✔️] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [✔️] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

    <details><summary>Links</summary><p>

  - [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  - [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
  </p></details>

- [ ] **Codigos de status de HTTP**

    <details><summary>Links</summary><p>

  - [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  - [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
  </p></details>

## 4. Diagrama de flujo ✍

El plan de trabajo cuenta con un solo diagrama de flujo donde se detalla paso a paso el proceso que se esta realizando y las opciones que estamos ingresando

![diagrama_de_flujo](./img/diagrama.png)

## 5. ¿Qué incluye la librería? 📚

Esta libreria esta desarrollada pensando en las necesidades del desarrollador web, en caso desee verificar o validar los enlaces de un o varios archivos .md se encuentran aun vigentes, detallo a continuacion las opciones que podra ingresar y los resultados.

- **Resultado al ingresar un directorio**

![directorio](./img/directorio.jpg)

- **Resultado al ingresar una ruta**

![ruta](./img/archivo.jpg)

- **Resultado al ingresar una opcion (--validate)**

![option_validate](./img/validate.jpg)

- **Resultado al ingresar una opcion (--stats)**

![option_stats](./img/stats.jpg)

- **Resultado al ingresar una opcion (--stats --validate)**

![option_stats_validate](./img/stats-validate.jpg)

- **Resultado al ingresar un(ruta/directorio) y la opcion --help**

![option_help](./img/help.jpg)

## 6. Instalacion ⚙️
