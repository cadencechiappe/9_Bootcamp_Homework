// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

// inquirer prompt and run code
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

    fs.writeFile('${data.fileName}.md', markdownPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
