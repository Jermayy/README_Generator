const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [{
        type: "input",
        name: "repoName",
        message: "Enter the title of your application (Required)",
        validateName: (name) => {
            if (name) {
                return true;
            } else {
                console.log("Enter the name of your app!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "userName",
        message: "Enter your GitHub username (Required)",
        validateName: (username) => {
            if (username) {
                return true;
            } else {
                console.log("Enter your GitHub username!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Enter a description for your application",
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log("Enter a description");
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your application (Required)",
        validate: (installInput) => {
            if (installInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for your application (Required)",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Select licensing for your app (Required)",
        choices: ["GPL V3", "EPL 1.0", "MIT", "MPL 2.0"],
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmIssues",
        message: "Report any issues?",
        default: false,
    },
    {
        type: "input",
        name: "contributors",
        message: "List other contributors, if no others type "
        none "?(Required)",
        validate: (contributorsInput) => {
            if (contributorsInput) {
                return true;
            } else {
                console.log("Enter none for no contributors");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "List any tests performed on this app (Required)",
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Enter 'none' if no tests to note");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "contact",
        message: "Add your email address for other developers to contact you (Required)",
        validate: (contactInput) => {
            if (contactInput) {
                return true;
            } else {
                console.log("Contact info added!");
                return false;
            }
        },
    },



];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();