const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");

const templateHelper = (rosterData) => {
  const createManager = (Manager) => {
    return `
    <div class="employee">
      <div class="name and title">
        <h2 class="name"> ${Manager.getName()}</h2>
        <h3 class="role"> ${Manager.getRole()}</h3>
      </div>
      <div class="employee info">
        <ul class="info list">
          <li class="id">${Manager.getID()}</li>
          <li class="email">${Manager.getEmail()}</li>
          <li class="officeNumber">${Manager.officeNumber()}</li>
        </ul>
      </div>
    </div> `;
  };

  const createEngineer = (Engineer) => {
    return `
    <div class="employee">
      <div class="name and title">
        <h2 class="name"> ${Engineer.getName()}</h2>
        <h3 class="role"> ${Engineer.getRole()}</h3>
      </div>
      <div class="employee info">
        <ul class="info list">
          <li class="id">${Engineer.getID()}</li>
          <li class="email">${Engineer.getEmail()}</li>
          <li class="GitHub">${Engineer.getGitHub()}</li>
        </ul>
      </div>
    </div> `;
  };

  const createIntern = (Intern) => {
    return `
    <div class="employee">
      <div class="name and title">
        <h2 class="name"> ${Intern.getName()}</h2>
        <h3 class="role"> ${Intern.getRole()}</h3>
      </div>
      <div class="employee info">
        <ul class="info list">
          <li class="id">${Intern.getID()}</li>
          <li class="email">${Intern.getEmail()}</li>
          <li class="school">${Intern.getSchool()}</li> 
        </ul>
      </div>
    </div> `;
  };

  let html = `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>`;

  rosterData.forEach((person) => {
    if (person instanceof Engineer) {
      html += createEngineer(person);
    } else if (person instanceof Manager) {
      html += createManager(person);
    } else {
      html += createIntern(person);
    }
  });

  html += `</body></html>`;

  return html;
};

module.exports = templateHelper;
