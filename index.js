const fs = require("fs");
const inquirer = require("inquirer");
const { table } = require("console");

// array of questions for user
const questions = [{
        type: "input",
        name: "repoName",
        message: "Enter the title of your application (Required)",
        default: "myApp",
        validateName: (name) => {
            if (name) {
                return true;
            } else {
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
        default: "",
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
        message: "List other contributors, if no others type none ?(Required)",
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


// function to initialize program
function init() {

    const tableOfContent = "  \n ## Table of Contents:  \n[1. Description](#Description)  \n[2. Installation](#Installation)  \n[3. App Usage](#App-Usage)  \n[4. License Details](#License-Details)  \n[5. List of Contributors](#List-of-Contributors)  \n[6. Tests](#Tests)  \n[7. Questions](#Questions)  \n";

    inquirer.prompt(questions).then((res) => {
            title();

            function title() {
                fs.writeToFile("./dist/README.md",
                    `# ${res.repoName} \r\n`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            return;

                        }
                        console.log("Repo Name Added");
                        licence();
                    }
                );
            }

            //generate licence Badge "GPL V3", "EPL 1.0", "MIT", "MPL 2.0"

            function licence() {
                if (res.licence === "GPL V3") {
                    fs.appendFileSync(
                        "./dist/README.md",
                        `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
                        (err) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log("Licence: GPL V3");
                            table();
                        }
                    );
                } else if (res.licence === "EPL 1.0") {
                    fs.appendFileSync(
                        "./dist/README.md",
                        `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
                        (err) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log("Licence: EPL 1.0");
                            table();
                        }
                    );
                } else if (res.licence === "MIT") {
                    fs.appendFileSync(
                        "./dist/README.md",
                        `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
                        (err) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log("Licence: MIT");
                            table();
                        }
                    );
                } else if (res.licence === "MPL 2.0") {
                    fs.appendFileSync(
                        "./dist/README.md",
                        `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
                        (err) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log("Licence: MPL 2.0");
                            table();
                        }
                    );
                }












            })





    }

    // function call to initialize program
    init();