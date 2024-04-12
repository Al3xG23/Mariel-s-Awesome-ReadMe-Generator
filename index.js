// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { constants } = require('buffer');

// Created an array of messages for user input
const questions = [
    {        
        name: 'Your_Project_Title',
        message: "What is your project's title?"
    },    
    {
        name: 'AS_A_USER',
        message: "What was your motivation for this project?"
    },
    {
        name: 'I_WANT',
        message: "What do you want your project to do?"
    },
    {
        name: 'SO_THAT',
        message: "What problem does this project solve?"
    },
    // {
    //     // TODO: should have a list of things to choose from to include as links in the README
    //     type: 'checkbox',
    //     name: 'Table Of Contents',
    //     message: "What do you want to include in your Table of Contents?",
    //     choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    // },
    {
        name: 'Installation',
        message: "What are your project's installation instructions?"
    },
    {
        name: 'Usage',
        message: "How do you use your project?"
    },
    {
        type: 'list',
        name: 'License',
        message: "Choose a License here:",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {        
        name: 'Contributing',
        message: "Name collaborators here:"
    },
    {
        name: 'Tests',
        message: "What are your test instructions?"
    },    
    {
        
        name: 'Questions1',
        message: "Enter your GitHub username:"
    },
    {
        name: 'Questions2',
        message: "Enter your email:"
    },
];


// Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions, function (data) {
    })
    .then((data) => {
        const filename = 'README.md'
        const readmeData = `# ${data.Your_Project_Title}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Description

AS A USER: ${data.AS_A_USER}

I WANT TO: ${data.I_WANT}

SO THAT: ${data.SO_THAT}

## Installation

${data.Installation}

## Usage

${data.Usage}

## License

${data.License}

## Contributors

${data.Contributing}

## Tests

${data.Tests}

## Questions

GITHUB: ${data.Questions1}

If you have more questions you can reach me at: ${data.Questions2}`


        fs.writeFile(filename, readmeData, (err) => {
            if (err) throw err;
            console.log('Your README file has been saved!');
        });
    });
};

writeToFile();

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
