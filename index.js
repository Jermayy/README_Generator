const fs = require("fs");
const inquirer = require("inquirer");

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
        name: "licence",
        message: "Select licensing for your app (Required)",
        choices: ["GPL V3", "EPL 1.0", "MIT", "MPL 2.0"],
        validate: (licenceInput) => {
            if (licenceInput) {
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
            fs.writeFile("./dist/README.md",
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
                    `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }

                    }
                );
                console.log("Licence: GPL V3");
                tableOfContentsGen();

            } else if (res.licence === "EPL 1.0") {
                fs.appendFileSync(
                    "./dist/README.md",
                    `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }

                    }
                );
                console.log("Licence: EPL 1.0");
                tableOfContentsGen();
            } else if (res.licence === "MIT") {
                fs.appendFileSync(
                    "./dist/README.md",
                    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }

                    }
                );
                console.log("Licence: MIT");
                tableOfContentsGen();
            } else if (res.licence === "MPL 2.0") {
                fs.appendFileSync(
                    "./dist/README.md",
                    `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }

                    }
                );
                console.log("Licence: MPL 2.0");
                tableOfContentsGen();
            }
        }

        //Add Table of Contents Function

        function tableOfContentsGen() {
            fs.appendFileSync("./dist/README.md", `${tableOfContent}`, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

            });
            console.log("Table of Contents added");
            descriptionGen();
        }

        // Add Description

        function descriptionGen() {
            fs.appendFileSync("./dist/README.md", `## Description:\n${res.description}\n`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                })
            console.log("Description added");
            installInstruction();
        }


        //Installation Instructions
        function installInstruction() {
            fs.appendFileSync("./dist/README.md", `## Installation:\n${res.installation}\n`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }

                })
            console.log("Installation instructions added");
            usageInstruction();
        }


        // Usage Instructions
        function usageInstruction() {
            fs.appendFileSync("./dist/README.md", `## Usage:\n${res.usage}\n`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }

                })
            console.log("Usage instructions added");
            licensingInfo();
        }


        //Add License info

        function licensingInfo() {
            fs.appendFileSync("./dist/README.md", `## License Details:  \n The Eclipse Public License (EPL) is a free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation.  \n  \n Software under the GPL may be run for all purposes, including commercial purposes and even as a tool for creating proprietary software, such as when using GPL-licensed compilers.  \n  \n The MIT License is a free software license that was created at the Massachusetts Institute of Technology (MIT). It is a permissive license, meaning that it allows programmers to put the code in proprietary software on the condition that the license is given with that software, and GPL-compatible, meaning that the GPL permits programmers to combine and redistribute it with software that uses the MIT License.  \n  \n The MPL is a simple copyleft license. The MPL's "file-level" copyleft is designed to encourage contributors to share modifications they make to your code, while still allowing them to combine your code with code under other licenses (open or proprietary) with minimal restrictions.`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }

                })
            console.log("License info added");
            contributorList();
        }


        //Add Contributors
        function contributorList() {
            fs.appendFileSync("./dist/README.md", ` \n## List of Contributors: \n${res.contributors}\n`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }

                })
            console.log("Contributor List added");
            test();
        }


        //Add Tests
        function test() {
            fs.appendFileSync("./dist/README.md", ` \n## Tests: \n${res.tests}\n`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }

                })
            console.log("Tests listed");
            question();
        }

        //Add Contact Details
        function question() {
            fs.appendFileSync(
                "./dist/README.md",
                `## Questions:\n Here is a link to my github:  \nhttps://github.com/${res.userName}  \n Email me at:  \n${res.contact}  \nfor additional questions\n`,
                (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }




                })

            console.log("Contact info added");



        }

    })
};
// function call to initialize program
init();