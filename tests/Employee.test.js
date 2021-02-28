const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName', () => {
        it('should return the Employee name', () => {
            const name = 'mike'
            const get = new Employee('mike', 2, 'abc@hotmail.com');
            const result = get.getName();
            expect(result).toEqual(name);
        });
    });
    describe('getId', () => {
        it('should return the Employee id number', () => {
            const id = 2;
            const get = new Employee('mike', 2, 'abc@hotmail.com');
            const result = get.getId();
            expect(result).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it('should return the Employee email', () => {
            const email = 'abc@hotmail.com';
            const get = new Employee('mike', 2, 'abc@hotmail.com');
            const result = get.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe('getRole', () => {
        it('should return the role of this employee', () => {
            const role = 'Employee'
            const get = new Employee('mike', 2, 'abc@hotmail.com');
            const result = get.getRole();
            expect(result).toEqual(role);
        })
    })
});