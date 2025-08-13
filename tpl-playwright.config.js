// @ts-check
const { defineConfig, devices } = require("@playwright/test");
import * as os from "node:os";
const fs = require("fs-extra");

// Limpia la carpeta allure-results antes de cada ejecución
fs.emptyDirSync('allure-results');

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  repeatEach: 1,
  retries: process.env.CI ? 3 : 3,
  workers: Math.min(os.cpus().length, 5),
  reporter: [
    ["line"],
    ["list", { printSteps: true }],
    ["html", { outputFolder: "playwright-report" }],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        categories: [
          {
            name: "Outdated tests",
            messageRegex: ".*FileNotFound.*",
          },
        ],
        environmentInfo: {
          framework: "Automatizacion de Pruebas con Playwright",
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],

  use: {
    headless: true,
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "c",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ["--ignore-certificate-errors", "--start-maximized"],
        },
      },
    },/*
    {
      name: "Firefox",
      use: {
        ...devices["Desktop Firefox"],
        channel: "firefox",
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ["--ignore-certificate-errors", "--start-maximized"],
        },
      },
    },*/
  ],
});
