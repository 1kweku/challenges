const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }
  getName() {
    return this.name;
  }

  getRole() {
    return "Engineer";
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGitHub() {
    return this.GitHub;
  }
}

module.exports = Engineer;
