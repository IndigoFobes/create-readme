// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'None/other') {
    return ``;
  }
  else {
    return `[![](https://img.shields.io/badge/license-${license}-green.svg)](${renderLicenseLink(license)})`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return 'https://apache.org/licenses/';
    break;
    case 'GNU':
      return 'https://www.gnu.org/licenses/';
      break;
    case 'MIT':
      return 'https://mit-license.org/';
      break;
    case 'ISC':
      return 'https://www.isc.org/licenses/';
      break;
    case 'Mozilla':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'Boost':
      return 'https://www.boost.org/doc/libs/1_31_0/LICENSE_1_0.txt';
      break;
    case 'Unlicense':
      return 'https://unlicense.org/';
      break;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None/other') {
    return ``;
  }
  else {
    return `This application is licenced under ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
// Grab data from index.js .prompt/.then function
function generateMarkdown(data) {
  


  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  <a name="installation"></a>
  ## Installation 

  ${data.install}

  <a name="usage"></a>
  ## Usage

  ${data.use}

  <a name="license"></a>
  ## License

  ${renderLicenseSection(data.license)}

  <a name="contribution"></a>
  ## How to Contribute

  ${data.contribute}

  <a name="tests"></a>
  ## Tests

  ${data.test}

  <a name="questions"></a>
  ## Questions

  Link to my GitHub Profile [here](https://github.com/${data.github})

  For more questions, email me at ${data.email}.
`;

}



// This will simply allow this function to be available to me in the index.js file
module.exports = generateMarkdown;

