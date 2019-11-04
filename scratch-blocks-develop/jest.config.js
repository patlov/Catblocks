/**
 * Jest configuration file
 * Ref: https://itnext.io/testing-your-javascript-in-a-browser-with-jest-puppeteer-express-and-webpack-c998a37ef887
 */

module.exports = {
  preset: "jest-puppeteer",
  globals: {
    SERVER: "http://localhost:8080/"
  },
  testMatch: [
    "**/tests/**/*.test.js"
  ]
}