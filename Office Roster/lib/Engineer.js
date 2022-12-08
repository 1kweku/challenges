const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor (name, id, email, GitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.GitHub = this.GitHub; 
    }


getGitHub () {
    return this.GitHub;
}

getRole () {
    return 'Engineer'
}

}

module.exports = Engineer 