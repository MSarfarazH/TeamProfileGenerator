const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");

function EngQs() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is their name?" },

      { type: "input", name: "ID", message: "What is their ID?" },

      { type: "input", name: "email", message: "What is their E-mail?" },

      {
        type: "input",
        name: "github",
        message: "What is their Github Username?",
      },
    ])
    .then(function (input) {
      // console.log(input)
      const Eng = new Engineer(input.name, input.ID, input.email, input.github);
      console.log(Eng);
      start()
    });
} 

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
