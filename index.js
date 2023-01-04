// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        title: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        title: "input",
        message: "What is the description for your project?",
        name: "description",
    },
    {
        title: "input",
        message: "What are your installation instructions",
        name: "installation",
    },
    {
        title: "input",
        message: "What is your usage information",
        name: "usage",
    },
    {
        title: "input",
        message: "Enter contribution information here.",
        name: "contribution",
    },
    {
        title: "input",
        message: "What are the instructions to run a test?",
        name: "tests",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your license?',
        choices: ['none', 'APM', 'CPAN', 'MIT']
    },
    {
        title: "input",
        message: "What is your github username?",
        name: "githubUsername",
    },
    {
        title: "input",
        message: "What is your email?",
        name: "email",
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
