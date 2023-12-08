// includes packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input to be obtained from the commandline/terminal
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is the title of your project?"
    } ,
    {
        type: 'input',
        name: 'projectDescription',
        message: "What is the description of your project?"
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: "What are the installation instructions of your project?"
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: "What usage information should be added for this project?"
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: "What contribution guidelines should be added for this project?"
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: "What test instructions should be added for this project?"
    },
    {
        type: 'list',
        name: 'licenseType',
        message: "Which license should be used for this project?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License']
    },
    {
        type: 'input',
        name: 'gitUserName',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: "What is your email address?"
    }
];


// a function to initialize app, uses inquirer method to prompt the user for answers to above questions, which returns an object called answers. 
// then, the answers object is passed to generateMarkdown function to create the markdownString.
// then, .fs library is used to write a README.md file containing the markdownString.
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        let markdownString = generateMarkdown.generateMarkdown(answers);
        console.log(markdownString);
        fs.writeFile('generated_README.md', markdownString, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    });
}

// Function call to initialize app
init();


