const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('getName', () => {
        it('should return the Manager name', () => {
            const name = 'mike'
            const get = new Manager('mike', 2, 'abc@hotmail.com', 1);
            const result = get.getName();
            expect(result).toEqual(name);
        });
    });
    describe('getId', () => {
        it('should return the Employee id number', () => {
            const id = 2;
            const get = new Manager('mike', 2, 'abc@hotmail.com', 1);
            const result = get.getId();
            expect(result).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it('should return the Employee email', () => {
            const email = 'abc@hotmail.com';
            const get = new Manager('mike', 2, 'abc@hotmail.com', 1);
            const result = get.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe('getRole', () => {
        it('should return the role of this employee', () => {
            const role = 'Manager'
            const get = new Manager('mike', 2, 'abc@hotmail.com', 1);
            const result = get.getRole();
            expect(result).toEqual(role);
        })
    })
    describe('getofficeNumber', () => {
        it('should get the manager office number', () => {
            const office = 1
            const get = new Manager('mike', 2, 'abc@hotmail.com', 1);
            const result = get.getofficeNumber();
            expect(result).toEqual(office);
        });
    });
});