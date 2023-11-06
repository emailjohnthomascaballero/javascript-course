// How to import and export in CommonJS and ES Modules

// CommonJS: modules are the original way to package JavaScript code for Node.js.

// ES Modules: ES modules bring an official, standardized module system to JavaScript.

const aboutme = require("./aboutme");

aboutme.printName();
aboutme.person.name = "Lee!";
aboutme.printName();
aboutme.printRole();