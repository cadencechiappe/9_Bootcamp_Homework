// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
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
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
