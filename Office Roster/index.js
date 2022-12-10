const inquirer = require("inquirer");
const fs = require("fs");
const templateHelper = require("./src/templateHelper.js").default;

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
      message: "What is your name?",
      name: "name",
    },

    { type: "input", message: "What is your ID?", name: "ID" },

    { type: "input", message: "What is your email?", name: "email" },

    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Employee", "Engineer", "Manager", "Intern"],
    },
    //trySwitch()
  ]);

  //const engineerGithub;
  //const managerOfficeNumber;
  //const ifIntern;

  /* async function trySwitch(response.role) {
    switch(response.name) {
    case 'Engineer': const engineerGithub = await inquirer.prompt [
      {
        type: "input",
        question: "What is your GitHUb?",
        name: "GitHub",
      }
    ]
    break;
    case 'Manager': const managerOfficeNumber = await inquirer.prompt [
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

  if (response.role === "Manager") {
    const managerOfficeNumber = await inquirer.prompt([
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
      managerOfficeNumber.officeNumber
    );
    officeRoster.push(addManager);
    console.log("Added manager");
  } else if (response.role === "Engineer") {
    const engineerGithub = await inquirer.prompt([
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
      engineerGithub.GitHub
    );
    officeRoster.push(addEngineer);
    console.log("Added engineer");
  } else if (response.role === "Intern") {
    const internSchool = await inquirer.prompt([
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
      internSchool.School
    );
    officeRoster.push(addIntern);
    console.log("Added intern");
  }
};

function createRoster() {
  fs.writeFile("./dist/index.html", templateHelper(officeRoster), (err) =>
    err ? console.error(err) : console.log("HTML generated!")
  );
}

async function newMember() {
  await questions();
  const addMember = await inquirer.prompt([
    {
      type: "list",
      question: "Add another role to your team?",
      name: "team",
      choices: ["Yes", "No"],
    },
  ]);
  if (addMember.team === "Yes") {
    return newMember();
  }
  console.log(officeRoster);
  createRoster();
}

newMember();
