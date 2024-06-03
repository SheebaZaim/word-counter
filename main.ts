#! usr/bin/env node
// This lin eis called shabang.it  tells the os to run it with node .js

//  inquirernthe module which is command line Interface for Node.js.
import inquirer from "inquirer"

//  Declare the const 'answer'and assign it to te result of inquirer prompt function.

const answers:{
    Sentence : string,
} = await inquirer. prompt([
    {
     name:"Sentence",
    type:"input",
    message:"enter your sentence to count the words."
}
]);
const words=answers.Sentence.trim().split(" ")
// print the array of words.
console.log(words);

//print the word count  of the sentence to the console.
console.log(`your sentence wor count is${words.length}`);