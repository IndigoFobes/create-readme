// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 console.log('hello!');
}

// TODO: Create a function to generate markdown for README
// Grab data from index.js .prompt/.then function
function generateMarkdown(data) {
  if (data.license == 'None/other') {
    data.license = '';
  }

  return `# ${data.title}

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

  ${data.license}

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

