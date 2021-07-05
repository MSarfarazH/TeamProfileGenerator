const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");



function start() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "what is the role of the team member?",
      choices: ["Manager", "Engineer", "Intern", "Exit"],
    })

    .then(function (input) {
      // console.log(input)
      if (input.role === "Engineer") {
        EngQs();
      }
    });
}
start();
