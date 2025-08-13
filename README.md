# Índice

- [Introducción](#introducción)
  - [Roles en el Proyecto](#roles-en-el-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Inicio](#inicio)
  - [Pre-requisitos](#pre-requisitos)
  - [Clonación de proyecto e instalación de Playwright](#clonación-de-proyecto-e-instalación-de-playwright)
  - [Instalación librerias](#instalación-librerias)
  - [Actualización de los browsers de Playwright](#actualización-de-los-browsers-de-playwright)
- [Reportes](#reportes)
  - [Pre-requisitos](#pre-requisitos-1)
  - [Instalación de Allure](#instalación-de-allure)
  - [Configuración de Allure](#configuración-de-allure)
  - [Generación de reportes](#generación-de-reportes)
- [Construido con](#construido-con)
- [Links útiles](#links-útiles)
  - [Iniciando Playwright](#iniciando-playwright)
  - [Artículos sobre Page Object Model en Playwright](#artículos-sobre-page-object-model-en-playwright)
  - [Playlists/videos Youtube](#playlistsvideos-youtube)
  - [Comandos útiles](#comandos-útiles)
- [Autor](#autor)

# Introducción

El objetivo del siguiente proyecto es agilizar las pruebas de regresión de SISTEMA y para ello se automatizarán pruebas EndToEnd.

Las pruebas:

- Deberán realizarse durante todo el proceso de desarrollo para asegurar que ninguna de las funciones estables de SISTEMA sufran modificaciones.
- Podrán ser ejecutadas en cualquier ambiente de QA con mínimas configuraciones.
- Deberán ser independientes entre ellas y no debería ocurrir que un test dependa de otro anterior.
  Todo el proceso deberá ser independiente.

[Índice](#índice)

## Roles en el Proyecto

Escritor de tests

Monitor de resultados

Actualizador de tests

El proyecto de automatización de pruebas es un proyecto de desarrollo de software en sí mismo.
Requiere tiempo de planificación de tests, escritura, ejecución, actualización y monitoreo.

La automatización de pruebas NO reemplaza al testing manual. La automatización de pruebas complementa al testing manual.

La escabilidad de un proyecto de automatización implica que se pueda ejecutar en diferentes ambientes QA

El mantenimiento de cada test y la continua creación de test es obligatorio para mantener vigente al proyecto.

El reporte de resultados y monitoreo de los tests deberá ser registrado para posteriores analisis.

[Índice](#índice)

# Estructura del Proyecto

README.md : El archivo README proporciona toda la documentación del proyecto, instrucciones de instalación, requisitos previos y otra información relevante para QA's, Desarrolladores o cualquier persona interesada en desplegar el proyecto.

tests/ : En esta carpeta se agrupan las pruebas relacionados en subcarpetas y casos de prueba individuales. Una buena organización de carpetas facilitará la ejecución de pruebas.

POM/ : Aquí se encontrarán las clases de objetos de página que representan diferentes páginas o componentes de la aplicación web. Se agrupa de acuerdo a los diferentes sistemas involucrados en las pruebas.

resources/ : Esta carpeta contiene todos los recursos adicionales requeridos por las pruebas, como imágenes, videos o archivos de audio. Existirán subcarpetas como por ejemplo videos, data, etc.

resources/data/ : Aquí se encontrarán los diferentes archivos que poseen los datos requeridos para los diferentes tests. Pueden ser archivos JSON, XML o CSV.

allure-results/ : En esta carpeta se almacenarán los informes de prueba, capturas de pantalla, videos y otros elementos generados durante la ejecución de una prueba. Es recomendable guardar los archivos según el tipo de informe o recurso para mantener una estructura de informes limpia y organizada.

env/: Se encuentran los diversos archivos de variables de entorno utilizados en el proyecto.

installDependencies.js: Archivo con script para realizar la instalación de las dependencias utilizadas en el proyecto.

pipelines/: Se encuentran las pipelines que se pueden utilizar para la CI/CD

[Índice](#índice)

# Inicio

Se deberán seguir las instrucciones para obtener una copia local del proyecto en funcionamiento para propósitos de desarrollo y pruebas.

[Índice](#índice)

## Pre-requisitos

Requisitos necesarios para el correcto funcionamiento del proyecto y cómo instalarlos.

- [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win)
- [Nodejs](https://nodejs.org/en/download)

[Índice](#índice)

## Clonación de proyecto e instalación de Playwright

A continuación se describen los pasos para descargar e instalar el proyecto y visualizarlo desde Visual Studio Code.

1. Descargar una copia o clonar el código del repositorio desde GitHub.

![](/videosReadme/Clonar_el_repositorio.webm)

2. Instalar Playwright.

![](/videosReadme/Instalar_Playwright.webm)

3. Instalar la extensión 'Playwright Test for VSCode' en Visual Studio Code.

[Índice](#índice)

## Instalación librerias

Ejecutar

```javascript
node installDependencies.js
```

[Índice](#índice)

## Actualización de los browsers de Playwright

Ejecutar

```javascript
npx playwright install
```

[Índice](#índice)

# Reportes

Se implementa la herramienta Allure para la generación de reportes

[Índice](#índice)

## Pre-requisitos:

Tener instalado JAVA.

En caso de Linux, seguir la siguiente documentación para instalar:

https://www.java.com/es/download/help/linux_x64_install.html

[Índice](#índice)

## Instalación de Allure:

En caso de Linux, seguir la siguiente documentación para instalar:

https://allurereport.org/docs/install-for-linux/

[Índice](#índice)

## Configuración de Allure:

Para proyectos ya existentes:

Adding Allure Playwright to an existing project

https://allurereport.org/docs/playwright/#adding-allure-playwright-to-an-existing-project

[Índice](#índice)

## Generación de reportes:

Ejecutar el siguiente comando en una terminal dentro del directorio principal del proyecto:

```
npx allure serve allure-results
```

[Índice](#índice)

# Construido con

- [Playwright](https://playwright.dev/) - Framework de automatización.
- [Allure Report](https://allurereport.org/) - Herramienta de reportes.
- [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win) - Editor de código.
- [Extensión VSC Allure Report](https://marketplace.visualstudio.com/items?itemName=qameta.allure-vscode)
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

[Índice](#índice)

# Links útiles

## Iniciando Playwright

- Sitio Oficial de Playwright : https://playwright.dev/

- Introducción a Playwright utilizando TypeScript - Carlos Gauto : https://www.youtube.com/watch?v=FOTEcR3ZJ4E

- Repositorio Introducción a Playwright utilizando TypeScript - Carlos Gauto: https://github.com/charlyautomatiza/starter-playwright

- Template de Proyecto de QAlified : https://github.com/QAlified/automation-framework-playwright

- Comandos de Playwright: https://ceroshjacob.medium.com/common-playwright-commands-f640e4e1b989

- Selección de Problemas y soluciones en Playwright: https://playwrightsolutions.com/

[Índice](#índice)

## Artículos sobre Page Object Model en Playwright

- Playwright Page Object Model: A Definitive Guide: https://www.lambdatest.com/learning-hub/playwright-page-object-model

- Building a Playwright JavaScript Framework with Page Object Model: https://www.linkedin.com/pulse/building-playwright-javascript-framework-page-object-model-appmetry/?trackingId=3l1HETMuR1iFiNBY%2B0h8Nw%3D%3D

- How to apply Playwright Fixtures with Page Object Model: https://medium.com/@tpshadinijk/how-to-apply-playwright-fixtures-with-page-object-model-658368968f21

- Mastering Playwright: Best Practices for Web Automation with the Page Object Model: https://medium.com/@lucgagan/mastering-playwright-best-practices-for-web-automation-with-the-page-object-model-3541412b03d1

- Page Object Model [Question] https://github.com/microsoft/playwright/issues/1604#issuecomment-1004711489
  Assertions:

- Playwright Assertions : Complete Guide With Examples: https://www.lambdatest.com/learning-hub/playwright-assertions

[Índice](#índice)

## Playlists/videos Youtube

- Curso Playwright en español - Julian Mesa https://www.youtube.com/playlist?list=PLeo6Q1inqlOdzwuW6ivlX_95682PfsGGG

- Curso de Playwright - Guillermo Marchebout �� https://www.youtube.com/playlist?list=PLPy7Tk66qAfVXqAs1Pk99kpXdGdbbk-Pm

- Playwright más fácil no podría ser - QA Minds Lab -https://www.youtube.com/watch?v=QCS_0oc3Wi0

- Automatización de pruebas con playwright https://www.youtube.com/watch?v=kiWiP5OMFcY

- Carlos Gauto, Charly Automatiza https://www.youtube.com/@CharlyAutomatiza

- Playwright Masterclass - Playwright Test https://www.youtube.com/watch?v=VKvZSpSWDZw

- What is Playwright? (� Playwright introduction tutorial, features & demo) https://www.youtube.com/watch?v=wGr5rz8WGCE

- Reuse Playwright Code across Files and Tests with Fixtures https://www.youtube.com/watch?v=2O7dyz6XO2s

- Playwright Beginner Tutorials https://www.youtube.com/playlist?list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8

- Faker.js Tutorial - Generate Random Name with Javascript https://www.youtube.com/watch?v=16p3LC1bFZc&t=3s

- PLAYWRIGHT: Fixtures + Page Object Model (EXPLICACIÓN DETALLADA) - JoanMedia
  https://www.youtube.com/watch?v=_vEnh_sx0oQ

- Playwright with Javascript | Page Object Model Pattern | POM | Part 34 - Pavan Kumar Bhimavarapu
  https://www.youtube.com/watch?v=IUjZQC2zGfg

- Playwright with Javascript | Locating Web Elements | Playwright built-in locator methods | Part 5 - Pavan Kumar Bhimavarapu
  https://www.youtube.com/watch?v=Yqyhkk5Tr3E&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=5

- Para definir el tamaño de pantalla correcto de acuerdo a cada monitor:
  https://whatismyviewport.com/ y https://playwright.dev/docs/api/class-page#page-set-viewport-size

- Identar código en VSC: https://www.youtube.com/watch?v=G6vi_jO95CE

- https://www.youtube.com/watch?v=WHyQsX0w_5g&t=44s

- https://stackoverflow.com/questions/70262213/playwright-before-each-for-all-spec-files

- https://stackoverflow.com/questions/66132097/playwright-upload-files-from-non-input-element-that-cannot-be-used-page-setinpu

- https://testerops.com/working-with-file-uploads-in-playwright/

- https://www.programsbuzz.com/course/playwright-tutorial

- https://www.npmjs.com/package/playwright-utilities

- https://testerops.com/working-with-file-uploads-in-playwright/

- https://stackoverflow.com/questions/66132097/playwright-upload-files-from-non-input-element-that-cannot-be-used-page-setinpu

- https://www.sdetcorner.com/2022/01/file-upload-playwright.html

- https://testersdock.com/playwright-file-upload/

- https://www.youtube.com/watch?v=HOzbXbA423w

- https://www.youtube.com/watch?v=jWrBv-b58Yw

- Para comparar PDF https://dev.to/ryanroselloog/verify-pdf-contents-using-playwright-and-pdf2json-1dob

[Índice](#índice)

## Comandos útiles

npx playwright codegen https://tuApp.com/

npx playwright test --ui

npx playwright --help

npx playwright test --debug

npx playwright test S1-Gestion1.spec.js --repeat-each=1000

[Índice](#índice)

Actualización de Playwright

- Para ver en qué versión está actualmente

npx @playwright/test --version

o

npx playwright --version

- Para actualizar a la última versión estable

npm install -D @playwright/test@latest

- Para actualizar los browsers

npx playwright install

[Índice](#índice)

# Autor

**Lucas del Reguero Martinez**

[Lucas del Reguero Martinez](https://www.linkedin.com/in/lucas-del-reguero-martinez/)

[Índice](#índice)
