const { exec } = require("child_process");

// Lista de dependencias sin versiones específicas
const dependencies = [
  "@faker-js/faker",
  "@playwright/test",
  "allure-commandline",
  "allure-playwright",
  "axios",
  "dotenv",
  "fs",
  "fs-extra",
  "pdf-parse",
  "pdf2json",
  "playwright",
  "playwright-utilities",
  "puppeteer",
  "ssh2",
  "pg",
  "prettier",
];

const installDependencies = () => {
  // Agregar el flag `@latest` para instalar las últimas versiones disponibles
  const command = `npm install ${dependencies.map((dep) => `${dep}@latest`).join(" ")}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al instalar dependencias: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

installDependencies();
