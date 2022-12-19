const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getName() {
    return this.name;
  }

  getRole() {
    return "Intern";
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
