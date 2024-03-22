// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { constants } = require('buffer');

// Created an array of messages for user input
const questions = [
    {
        //TODO: user input should take over the name
        name: 'Your Project Title',
        message: "What is your project's title?"
    },
    // TODO: these 3 should be under description
    {
        name: 'AS A USER',
        message: "What was your motivation?"
    },
    {
        name: 'I WANT',
        message: "Why did you build this project?"
    },
    {
        name: 'SO THAT',
        message: "What problem does this project solve?"
    },
    {
        // TODO: should have a list of things to choose from to include as links in the README
        type: 'checkbox',
        name: 'Table Of Contents',
        message: "What do you want to include in your Table of Contents?",
        choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    },
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
        message: "What are your test instrcutions?"
    },
    // TODO: these last 2 should both be under Questions section
    {
        //TODO: generate link to GitHub with username input
        name: 'Questions1',
        message: "Enter your GitHub username:"
    },
    {
        //TODO: add comment saying "If you have more questions you can reach me at... input email here"
        name: 'Questions2',
        message: "Enter your email:"
    },
];


// TODO: Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions, function (data) {
    })
    .then((data) => {
        const filename = 'generatedREADME.md'
        fs.writeFile(filename, JSON.stringify(data), (err) => {
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
