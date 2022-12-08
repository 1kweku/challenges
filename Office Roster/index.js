const inquirer = require("inquirer");
const fs = require("fs");

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
  ])};

  async function trySwitch(response.name) {
    switch(response.name) {
    case 'Engineer': const ifEngineer = await inquirer.prompt [
      {
        type: "input",
        question: "What is your GitHUb?",
        name: "GitHub",
      }
    ]};
  }

  
 /* if (response.name === "Manager") {
    const ifManager = await inquirer.prompt[
      {
        type: "input",
        question: "What is your office number?",
        name: "officeNumber",
      }
    ];
  }

  const addManager = new Manager(
    response.name,
    response.id,
    response.email,
    ifManager.name
  );
  officeRoster.push(addManager);

  if (response.position === "Engineer") {
    const ifEngineer = await inquirer.prompt[
      {
        type: "input",
        question: "What is your GitHUb?",
        name: "GitHub",
      }
    ];
  }
  const addEngineer = new Engineer(
    response.name,
    response.id,
    response.email,
    ifEngineer.name
  );
  officeRoster.push(addEngineer);

  if (response.position === "Intern") {
    const ifIntern = await inquirer.prompt[
      {
        type: "input",
        question: "What University did you attend?",
        name: "School",
      }
    ];
  }
  const addIntern = new Intern(
    response.name,
    response.id,
    response.email,
    ifIntern.school
  );
  officeRoster.push(addIntern);
};

async function newMember() {
  await questions();
  const addMember = await inquirer.prompt({
    type: "list",
    question: "Add another position to your team?",
    name: "team",
    choices: ["Yes", "No"],
  });
  if (newMember.addMember === "Yes") {
    return questions();
  }
  createRoster();
}

function createRoster() {
  fs.writeFile("index.html", officeRoster, (err) =>
    err ? console.error(err) : console.log("HTML generated!")
  );
}*/

questions();
