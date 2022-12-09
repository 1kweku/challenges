const inquirer = require("inquirer");
const fs = require("fs");
const generateRoster = require("./src/roster");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let officeRoster = [];

const questions = async () => {
  const response = await inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "input",
      question: "What is your name?",
      name: "name",
    },

    { type: "input", question: "What is your ID?", name: "ID" },

    { type: "input", question: "What is your email?", name: "email" },

    {
      type: "list",
      question: "What is your position?",
      name: "position",
      choices: ["Employee", "Engineer", "Manager", "Intern"],
    },
    //trySwitch()
  ]);

  //const ifEngineer;
  //const ifManager;
  //const ifIntern;

  /* async function trySwitch(response.position) {
    switch(response.name) {
    case 'Engineer': const ifEngineer = await inquirer.prompt [
      {
        type: "input",
        question: "What is your GitHUb?",
        name: "GitHub",
      }
    ]
    break;
    case 'Manager': const ifManager = await inquirer.prompt [
      {
        type: 'input',
        question: 'What is your office number',
        name: 'Office number'
      }
    ]
  break;
case 'Intern': const ifIntern = await inquirer.prompt [{
  type: 'input',
  question: 'What school did you go to',
  name: 'School'

}]};
  }};*/

  if (response.position === "Manager") {
    const ifManager = await inquirer.prompt([
      {
        type: "input",
        question: "What is your office number?",
        name: "officeNumber",
      },
    ]);

    const addManager = new Manager(
      response.name,
      response.id,
      response.email,
      ifManager.officeNumber
    );
    officeRoster.push(addManager);
  } else if (response.position === "Engineer") {
    const ifEngineer = await inquirer.prompt([
      {
        type: "input",
        question: "What is your GitHUb?",
        name: "GitHub",
      },
    ]);

    const addEngineer = new Engineer(
      response.name,
      response.id,
      response.email,
      ifEngineer.GitHub
    );
    officeRoster.push(addEngineer);
  } else if (response.position === "Intern") {
    const ifIntern = await inquirer.prompt([
      {
        type: "input",
        question: "What University did you attend?",
        name: "School",
      },
    ]);

    const addIntern = new Intern(
      response.name,
      response.id,
      response.email,
      ifIntern.School
    );
    officeRoster.push(addIntern);
  }
};

async function newMember() {
  await questions();
  const addMember = await inquirer.prompt([
    {
      type: "list",
      question: "Add another position to your team?",
      name: "team",
      choices: ["Yes", "No"],
    },
  ]);
  if (addMember.team === "Yes") {
    return questions();
  }
  createRoster();
}
//questions();
newMember();

function createRoster() {
  fs.writeFile("index.html", generateRoster(officeRoster), (err) =>
    err ? console.error(err) : console.log("HTML generated!")
  );
}

//questions().then(newMember);
console.log(officeRoster);
