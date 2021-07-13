const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const HTMLGenerator = require('./src/HTMLGenerator');
const teamArray = []

console.log(HTMLGenerator)
function EngQs() {
  inquirer.prompt([
      { type: "input", name: "name", message: "What is their name?" },
      { type: "input", name: "ID", message: "What is their ID?" },
      { type: "input", name: "email", message: "What is their E-mail?" },
      { type: "input", name: "github", message: "What is their Github Username?"},
    ])
    .then(function (input) {
      // console.log(input)
      const Eng = new Engineer(input.name, input.ID, input.email, input.github);
      teamArray.push(Eng)
      start()
    });
  }
  
  function ManQs() {
    inquirer.prompt([
      { type: "input", name: "name", message: "What is their name?" },
      { type: "input", name: "ID", message: "What is their ID?" },
      { type: "input", name: "email", message: "What is their E-mail?" },
      { type: "input", name: "officenum", message: "What is their Office Number?"},
    ])
    .then(function (input) {
      // console.log(input)
      const Man = new Manager(input.name, input.ID, input.email, input.officenum);
      teamArray.push(Man)
      console.log(teamArray)
      start()
    });
}

function IntQs() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is their name?" },
      { type: "input", name: "ID", message: "What is their ID?" },
      { type: "input", name: "email", message: "What is their E-mail?" },
      { type: "input", name: "school", message: "What is their school name?" },
    ])
    .then(function (input) {
      // console.log(input)
      const Int = new Intern(input.name, input.ID, input.email, input.school);
      teamArray.push(Int);
      start();
    });
}

function writeToFile(input) {
  fs.writeFile(input, (err) => {
    if (err) throw err;
    console.log("The Readme file is created");
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
      if (input.role === "Manager") {
        ManQs();
      }
      if (input.role === "Intern") {
        IntQs();
      }
      if (input.role === "Exit") {
        fs.writeFile("index.html", HTMLGenerator(input), function (err) {
          if (err) throw err;
          console.log("Saved!");
        });
      }
    });
}

start();
