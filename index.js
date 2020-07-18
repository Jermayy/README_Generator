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
                descInput = ""
            }
        }
    },


];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();