const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getPosition() {
    return "Intern";
  }
}

module.exports = Intern;
