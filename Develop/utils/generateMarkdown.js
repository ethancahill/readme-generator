



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Pearl':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage,
    contribution, instructions, license, username, email } = data;

  return `# ${title}
  ${renderLicenseBadge(license)}
  
  ## Description

  ${description}


  ## Table of Contents

  [Go to Instructions](#instructions)
  [Go to Usage](#usage)
  [Go to Contributing](#contributing)
  [Go to Tests](#tests)
  [Go to Questions](#questions)


  ## Instructions

  ${installation}


  ## Usage

  ${usage}


  ## Contributing

  ${contribution}


  ## Tests

  ${instructions}


  ## License

  ${renderLicenseBadge(license)}


  ## Questions

  ${username}
  ${email}
 

`
;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection }
