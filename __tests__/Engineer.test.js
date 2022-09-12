const Engineer = require('../lib/Engineer');

describe('Initialization', () => {
    it('should create an Engineer with proper inputs (name, id, email, github)', () => {
        const engineer = new Engineer("Arthur", 1, "arthur@gmail.com", "odthientho");
        expect(engineer.github).toEqual("odthientho");
    });
    it('should throw Error when missing github argument', () => {
        try {
            const engineer = new Engineer("Arthur", 1, "arthur@gmail.com");
        } catch(error) {
            const err = new Error("Please input enough arguments.");
            expect(error).toEqual(err);
        }
    });
});

describe('Calling functions', () => {
    it('should get github when getGithub called', () => {
        const engineer = new Engineer("Arthur", 1, "arthur@gmail.com", "odthientho");
        expect(engineer.getGithub()).toEqual("odthientho");
    });
    it('should get Engineer role when getRole called', () => {
        const engineer = new Engineer("Arthur", 1, "arthur@gmail.com", "odthientho");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});