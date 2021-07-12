const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const HTMLGenerator = require('./src/HTMLGenerator');
const managerArray = []
const engineerArray = []
const internArray = []
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
      let engCard = (
        `\n
                <div class="card">
                <div id="cardhead">
                <h1>${input.name}</h1>
                <h2>Manager</h2>
                </div>
                <p>ID: ${input.ID}</p>
                <a href="mailto:address"> ${input.email}</a>
                <p>office number: ${input.github}</p>
                </div>`
      );
      
      console.log(Eng);
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
      console.log(Man);
      start()
    });
}

function IntQs() {
  inquirer.prompt([
      { type: "input", name: "name", message: "What is their name?" },
      { type: "input", name: "ID", message: "What is their ID?" },
      { type: "input", name: "email", message: "What is their E-mail?" },
      { type: "input", name: "school", message: "What is their school name?",
      },
    ])
    .then(function (input) {
      // console.log(input)
      const Int = new Intern(input.name, input.ID, input.email, input.school);
      console.log(Int);
      start()
    });
} 

function writeToFile(input) {
  fs.writeFile(input, (err) => {
    if (err) throw err;
    console.log("The Readme file is created");
  });
};

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
      //  writeToFile('./dist/index.html', HTMLGenerator(input));
    });
}

start();
