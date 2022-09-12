const Intern = require('../lib/Intern');

describe('Initialization', () => {
    it('should create an Intern Object with proper inputs (name, id, email, school)', () => {
        const intern = new Intern("Arthur", 1, "arthur@gmail.com", "GTech");
        expect(intern.school).toEqual("GTech");
    });
    it('should throw Error when missing school argument', () => {
        try {
            const intern = new Intern("Arthur", 1, "arthur@gmail.com");
        } catch(error) {
            const err = new Error("Please input enough arguments.");
            expect(error).toEqual(err);
        }
    });
});

describe('Calling functions', () => {
    it('should get school when getSchool called', () => {
        const intern = new Intern("Arthur", 1, "arthur@gmail.com", "GTech");
        expect(intern.getSchool()).toEqual("GTech");
    });
    it('should get Engineer role when getRole called', () => {
        const intern = new Intern("Arthur", 1, "arthur@gmail.com", "GTech");
        expect(intern.getRole()).toEqual("Intern");
    });
});