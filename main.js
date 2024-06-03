#! usr/bin/env node
"use strict";
// This lin eis called shabang.it  tells the os to run it with node .js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  inquirernthe module which is command line Interface for Node.js.
const inquirer_1 = __importDefault(require("inquirer"));
//  Declare the const 'answer'and assign it to te result of inquirer prompt function.
const answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "enter your sentence to count the words."
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of words.
console.log(words);
//print the word count  of the sentence to the console.
console.log(`your sentence wor count is${words.length}`);
