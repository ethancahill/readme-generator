// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a valid title.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a valid description.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message:'Provide instaltion instructions for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter valid installation instructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter valid usage information')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidlines.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines')
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide test instructions',
        validate: testInput =>{
            if (testInput) {
                return true;
            } else {
                console.log('Please enter valid test instructions.')
                return false
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
