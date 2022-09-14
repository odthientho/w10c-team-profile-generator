const Employee = require("../lib/Employee");

describe("Initialization", () => {
    it("should create an Object with proper inputs (name, id, email)", () => {
        const employee = new Employee("Arthur", 1, "arthur@gmail.com");

        // Verify that the new object has the correct properties
        expect(employee.name).toEqual("Arthur");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("arthur@gmail.com");
    });

    describe("should throw an error when giving an Object with no/missing variables", () => {
        const err = new Error("Please input enough arguments.");
        it("has no arguments", () => {
            try {
                const employee = new Employee();
            } catch(error) {
                expect(error).toEqual(err);
            }
        });

        it("has 1 arguments", () => {
            try {
                const employee = new Employee("Arthur");
            } catch(error) {
                expect(error).toEqual(err);
            }
        });

        it("has 2 arguments", () => {
            try {
                const employee = new Employee("Arthur", 2);
            } catch(error) {
                expect(error).toEqual(err);
            }
        });
    }); 

    describe("should throw an error if provided an email in invalid format", () => {
        const err = new Error("This is not a valid email.");
        it("has no @ in the email", () => {
            try {
                const employee = new Employee("Arthur", 3, "arthurgmail.com");
            } catch(error) {
                expect(error).toEqual(err);
            }
        });
        it("has no address name in the email", () => {
            try {
                const employee = new Employee("Arthur", 4, "@gmail.com");
            } catch(error) {
                expect(error).toEqual(err);
            }
        });
        it("has no domain part in the email", () => {
            try {
                const employee = new Employee("Arthur", 5, "arthur@");
            } catch(error) {
                expect(error).toEqual(err);
            }
        });
    }); 

    describe("should throw an error if giving invalid ID that", () => {
        const err = new Error("This is not a valid ID.");
        it("is not a number", () => {
            try {
                const employee = new Employee("Arthur", "NotANumber", "Arthur@gmail.com");
            } catch(error) {
                expect(error).toEqual(err);
            }
        });
        it("gives a second Employee with the same ID", () => {
            try {
                const employee1 = new Employee("Arthur", 6, "Arthur@gmail.com");
                const employee2 = new Employee("John", 6, "John@gmail.com");
            } catch(error) {
                expect(error).toEqual(err);
            }
        });
    });
});

describe("Calling functions", () => {
    it("should return name when function getName called", () => {
        const employee = new Employee("Arthur", 7, "arthur@gmail.com");
        expect(employee.getName()).toEqual("Arthur");
    });

    it("should return id when function getId called", () => {
        const employee = new Employee("Arthur", 8, "arthur@gmail.com");
        expect(employee.getId()).toEqual(8);
    });
    
    it("should return email when function getEmail called", () => {
        const employee = new Employee("Arthur", 9, "arthur@gmail.com");
        expect(employee.getEmail()).toEqual("arthur@gmail.com");
    });
    
    it("should return employee role when function getRole called", () => {
        const employee = new Employee("Arthur", 10, "arthur@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});