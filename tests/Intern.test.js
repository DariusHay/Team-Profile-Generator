const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('getName', () => {
        it('should return the Employee name', () => {
            const name = 'mike'
            const get = new Intern('mike', 2, 'abc@hotmail.com', 'UCF');
            const result = get.getName();
            expect(result).toEqual(name);
        });
    });
    describe('getId', () => {
        it('should return the Employee id number', () => {
            const id = 2;
            const get = new Intern('mike', 2, 'abc@hotmail.com', 'UCF');
            const result = get.getId();
            expect(result).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it('should return the Employee email', () => {
            const email = 'abc@hotmail.com';
            const get = new Intern('mike', 2, 'abc@hotmail.com', 'UCF');
            const result = get.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe('getRole', () => {
        it('should return the role of this employee', () => {
            const role = 'Intern'
            const get = new Intern('mike', 2, 'abc@hotmail.com', 'UCF');
            const result = get.getRole();
            expect(result).toEqual(role);
        })
    })
    describe('getSchoolName', () => {
        it('should return the role of this employee', () => {
            const school = 'UCF'
            const get = new Intern('mike', 2, 'abc@hotmail.com', 'UCF');
            const result = get.getSchoolName();
            expect(result).toEqual(school);
        });
    });
});