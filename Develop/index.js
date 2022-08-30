// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const process = require('process');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please enter a description of your project:', 'Please explain how to install your application:', 'Please explain how to use your application:', 'Please explain contribution guideluines:', 'Please provide test instructions:'];
//console.log(questions);
// TODO: Create a function to write README file
//const generateReadme = ({title, description, install, use, contribute, instructions}) =>
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
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'install',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'use',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[5],
        }
    ])
    // .then((answers) => {
    //     const readmeContent = generateReadme(answers);
    //     // (path, data, err)
    //     fs.writeFile('README.md', readmeContent, (err) =>
    //     err ? console.log(err) : console.log('README.md created!') 
    //     );
    // });


//console.log(process.argv);

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
