const inquirer = require('inquirer')
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
        message:'Provide installtion instructions for your project.',
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
    },
    {
        type: 'checkbox',
        name: 'licences',
        choices: ['MIT', 'Apache', 'MPL', 'CC-BY'],
        message: 'Choose license used',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.log('Please enter valid GitHub username')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter valid email address')
                return false
            }
        }
    }
];

const promptInput = () => {inquirer.prompt(questions)}

module.exports = { promptInput };