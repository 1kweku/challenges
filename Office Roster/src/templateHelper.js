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
          <li class="one">${Manager.getID()}</li>
          <li class="two">${Manager.getEmail()}</li>
          <li class="three">${Manager.officeNumber()}</li>
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
          <li class="one">${Engineer.getID()}</li>
          <li class="two">${Engineer.getEmail()}</li>
          <li class="three">${Engineer.getGitHub()}</li>
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
          <li class="one">${Intern.getID()}</li>
          <li class="two">${Intern.getEmail()}</li>
          <li class="three">${Intern.getSchool()}</li> 
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

  roster.forEach((person) => {
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
