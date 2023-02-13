const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a breif description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation intructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information for your project",
  },
  {
    type: "list",
    name: "licence",
    message: "Choose a licence for you project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },

  {
    type: "input",
    name: "contributing",
    message: "Enter the contributon guidlines for your project",
  },
  {
    type: "input",
    name: "gitubUsername",
    message: "Enter your github username",
  },

  { type: "input", name: "email", message: "Enter you email address" },
];

inquirer.prompt(questions).then((response) => console.log(response));

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
