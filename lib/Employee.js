class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
};

module.exports = Employee

// const newEmp = new Employee('mike', 2, 'abc@hotmail.com')

// console.log(newEmp.getName());