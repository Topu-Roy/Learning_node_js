//* Split code with separate files
//* By default every file is module in node JS
//* Purpose of module is to encapsulate code (shire minimum)

//! Syntax one

// ? const names = require("./names");
// ? const greeting = require("./module");

// ? greeting(names.bigoy);
// ? greeting(names.hemani);

//! Alternative syntax & Destructuring

const { bigoy, hemani } = require("./names");
const { greeting } = require("./module");

greeting(bigoy);
greeting(hemani);
