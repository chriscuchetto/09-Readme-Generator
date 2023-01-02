// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
        {
            title: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            title: "input",
            message: "What is your github username?",
            name: "github",
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(fileName, JSON.stringify(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile("README.md(Generated)", response);
    });
}
// Function call to initialize app
init();
