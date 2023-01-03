// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        title: "input",
        message: "What is your github username?",
        name: "title",
    },
    {
        title: "list",
        name: "license",
        message: "What is your license?",
        choices: ["APM", "CPAN", "MIT"]
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const exportData = generateMarkDown(data);
   return fs.writeFileSync(fileName, exportData);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile("README.md", response);
    });
}
// Function call to initialize app
init();
