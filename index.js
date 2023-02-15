const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
//getting absolute path for the generatwMardown file
//This prevents you from having to ammend the relative path if the package id relocated within the file structure of the professional readme generator
const generateMarkdownDir = path.resolve(__dirname, "utils");
const generateMarkdownFile = path.join(
  generateMarkdownDir,
  "generateMarkdown.js"
);
const generateMarkdown = require(generateMarkdownFile);

// array of questions to be passed to the inquirer prompt method
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
    type: "input",
    name: "credits",
    message: "Enter any credits for the project",
  },
  {
    type: "list",
    name: "license",
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
    name: "tests",
    message: "Enter any test instructions for the project",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your github username",
  },

  { type: "input", name: "email", message: "Enter your email address" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("README generated successfully!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    readme = generateMarkdown(data);

    writeToFile("README.md", readme);

    console.log(data);
    console.log(readme);
  });
}

// function call to initialize program
init();
