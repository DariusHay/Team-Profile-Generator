const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getofficeNumber() {
        return this.officeNumber
    };
    getRole() {
        return 'Manager'
    };
};

module.exports = Manager

// const d = new Manager(2);

// console.log(d.name)