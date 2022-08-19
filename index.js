// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions =
[
    {
        type: 'input',
        name: 'username',
        message: `What is your GitHub username?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your preferred business email?`,
    },
    {
        type: 'input',
        name: 'repo',
        message: `What is the name of your project's repository?`,
    },
    {
        type: 'input',
        name: 'title',
        message: `What is the title of your project?`,
    },
    {
        type: 'input',
        name: 'desc',
        message: `Please enter a description of your project:`,
    },
    {
        type: 'confirm',
        name: 'confirmInst',
        message: `Will other people need installation instructions for your project?`,
        default: true,
    },
    {
        type: 'input',
        name: 'inst',
        message: `Please enter the installation instructions for your project:`,
        when: ({confirmInst}) => confirmInst,
    },
    {
        type: 'confirm',
        name: 'confirmUse',
        message: `Will other people need instruction on how to use your application?`,
        default: true,
    },
    {
        type: 'input',
        name: 'use',
        message: `Please enter the instructions for the use of your project:`,
        when: ({confirmUse}) => confirmUse,
    },
    {
        type: 'confirm',
        name: 'confirmCont',
        message: `Would you like to include contribution instructions for your project?`,
        default: true,
    },
    {
        type: 'input',
        name: 'cont',
        message: `Please enter the contribution instructions for your project:`,
        when: ({confirmCont}) => confirmCont,
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: `Would you like to include instructions for any tests included with your project?`,
        default: false,
    },
    {
        type: 'input',
        name: 'test',
        message: `Please enter the testing instructions for your project:`,
        when: ({confirmTest}) => confirmTest,
    },
    {
        type: 'confirm',
        name: 'confirmLisence',
        message: `Would you like to include lisencing information for your project on the README?`,
        default: false,
    },
    {
        type: 'list',
        name: 'license',
        message: `Please select a license:`,
        choices: ['AFL-3.0', 'MIT', 'MPL-2.0', 'OSL-3.0', 'Unlicense', 'WTFPL'],
        when: ({confirmLisence}) => confirmLisence,
    },
    {
        type: 'input',
        name: 'dev',
        message: `Please enter any plans for future development. If none, explain the current condition of your project:`,
    },
    {
        type: 'input',
        name: 'credits',
        message: `Please include your name and any other credits necessary for your project:`,
    },
    {
        type: 'confirm',
        name: 'toc',
        message: `Would you like to include a table of contents in your README?`,
        default: true,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init()
{
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(data =>
    {
        generateMarkdown(data);
        console.log(generateMarkdown(data));
    });