// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const renderLicenseSection = require('./utils/generateMarkdown.js');
//const renderLicenseSection = require('./utils/generateMarkdown.js');
//const process = require('process');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please type your GitHub username:', 'Please type your email address:', 'Please enter a description of your project:', 'Please explain how to install your application:', 'Please explain how to use your application:', 'Please explain contribution guideluines:', 'Please provide test instructions:', 'Please select a licensing option...'];

// TODO: Create a function to write README file
// What would the parameters be, if any?
const writeReadme = () =>
    // where the `readme` will go.
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'github',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'install',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'use',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[7],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[8],
            choices: ['Apache', 'GNU', 'MIT', 'ISC', 'Mozilla', 'Boost', 'Unlicense', 'None/other']
        },
        
    ])
    .then((data) => {
        // Plop this data into the generateMarkdown function, defined in the utils file.
        const readmeContent = generateMarkdown(data);
        // (path, data, err)
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('README.md created!') 
        );
        //
    });


    
//console.log(process.argv);

// TODO: Create a function to initialize app
function init() {
    writeReadme();
}

// Function call to initialize app
init();
