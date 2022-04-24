// TODO: Include packages needed for this application
const fs = require('fs')
const { promptInput } = require('./questions')
const { generateMarkdown } = require('./utils/generateMarkdown')


// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptInput()
    .then(userData => {
        return generateMarkdown(userData);
    })
    .then(pageReadme => {
        return writeFile(pageReadme)
    })
}

// Function call to initialize app
init();
