const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('getName', () => {
        it('should return the Employee name', () => {
            const name = 'mike'
            const get = new Engineer('mike', 2, 'abc@hotmail.com', 'dhay');
            const result = get.getName();
            expect(result).toEqual(name);
        });
    });
    describe('getId', () => {
        it('should return the Employee id number', () => {
            const id = 2;
            const get = new Engineer('mike', 2, 'abc@hotmail.com', 'dhay');
            const result = get.getId();
            expect(result).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it('should return the Employee email', () => {
            const email = 'abc@hotmail.com';
            const get = new Engineer('mike', 2, 'abc@hotmail.com', 'dhay');
            const result = get.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe('getRole', () => {
        it('should return the role of this employee', () => {
            const role = 'Engineer'
            const get = new Engineer('mike', 2, 'abc@hotmail.com', 'dhay');
            const result = get.getRole();
            expect(result).toEqual(role);
        })
    })
    describe('getGitHub', () => {
        it('should return the role of this employee', () => {
            const gH = 'dhay'
            const get = new Engineer('mike', 2, 'abc@hotmail.com', 'dhay');
            const result = get.getGitHub();
            expect(result).toEqual(gH);
        })
    })
});