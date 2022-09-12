const Manager = require('../lib/Manager');

describe('Initialization', () => {
    it('should create an Manager Object with proper inputs (name, id, email, officeNumber)', () => {
        const manager = new Manager("Arthur", 1, "arthur@gmail.com", 1111);
        expect(manager.officeNumber).toEqual(1111);
    });
    it('should throw Error when missing school argument', () => {
        try {
            const manager = new Manager("Arthur", 1, "arthur@gmail.com");
        } catch(error) {
            const err = new Error("Please input enough arguments.");
            expect(error).toEqual(err);
        }
    });
    it("should throw Error when officeNumber is not a number", () => {
        try {
            const manager = new Manager("Arthur", 1, "arthur@gmail.com","11-22-44");
        } catch(error) {
            const err = new Error("It is not a number!");
            expect(error).toEqual(err);
        }
    });
});

describe('Calling functions', () => {
    it('should get school when getSchool called', () => {
        const manager = new Manager("Arthur", 1, "arthur@gmail.com", 1111);
        expect(manager.getOfficeNumber()).toEqual(1111);
    });
    it('should get Engineer role when getRole called', () => {
        const manager = new Manager("Arthur", 1, "arthur@gmail.com", 1111);
        expect(manager.getRole()).toEqual("Manager");
    });
});