// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// function userInput(){
//     inquirer
//         .prompt([
//         {
//             type: 'input',
//             name: 'fileName',
//             message: 'What do you want to call this README?',
//         },
//         {
//             type: 'input',
//             name: 'title',
//             message: 'Project Title?',
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Description of Project',
//         },
//         {
//             type: 'input',
//             name: 'instructions',
//             message: 'Specific Installation Instructions?',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'What is the usage information?',
//         },
//         {
//             type: 'input',
//             name: 'guidelines',
//             message: 'List contribution guidelines',
//         },
//         {
//             type: 'input',
//             name: 'test',
//             message: 'What are the test instructions?',
//         },
//     ])
// };


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile('${fileName}.md', data,
//     (err) => err ? console.error(err) : console.log('${fileName}.md has been generated.'))
// }

// // TODO: Create a function to initialize app
// async function init() {
//     let answers = await userInput();
//     writeFile((answers.fileName),(generateMarkdown(answers)));
// }

// // Function call to initialize app
// init();

inquirer
.prompt([
    {
        type: 'input',
        name: 'fileName',
        message: 'What do you want to call this README?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of Project',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Specific Installation Instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'List contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
])
  .then((answers) => {
    const markdownPageContent = generateMarkdown(answers);

    fs.writeFile('GeneratedREADME.md', markdownPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
