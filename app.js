const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const HTMLGenerator = require('./src/HTMLGenerator');
const teamArray = []
const engArray = []
const manArray = []
const intArray = []

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
      engArray.push(Eng)
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
      manArray.push(Man)
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
      intArray.push(Int);
      start();
    });
}

// function generateHTML () {
  
// }

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
        end()
      }
    });
}

function end() {
  console.log(engArray)
  console.log(manArray)
  console.log(intArray)

  const engInputArray = []
  const manInputArray = []
  const intInputArray = []
  const allInputArray = []

  engArray.forEach (function(input){
    var engInput = HTMLGenerator.GenerateEngineer(input)

    engInputArray.push(engInput)
  })

  manArray.forEach (function(input){
    var manInput = HTMLGenerator.GenerateManager(input)

    manInputArray.push(manInput)
  })

  intArray.forEach (function(input){
    var intInput = HTMLGenerator.GenerateIntern(input)

    intInputArray.push(intInput)
  })

  var joinedEngArray = engInputArray.join("")
  var joinedManArray = manInputArray.join("")
  var joinedIntArray = intInputArray.join("")

  allInputArray.push(joinedEngArray, joinedIntArray, joinedManArray)
  console.log(allInputArray.join(""))
  
  const generateTeamPage = function (joinedAllInputArray) {
    var joinedAllInputArray = allInputArray.join("")
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${joinedAllInputArray}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
};
  
console.log(generateTeamPage)

fs.writeFileSync("./dist/index.html", generateTeamPage(), 'UTF8')
  
}

start();

