const validations = require('../helpers/validation')
class Employee {
    constructor(name, id, email) {
        if (!name || !id || !email) throw new Error("Please input enough arguments.");
        if (validations.validateId(id) == true) {
            if (validations.validateEmail(email) == true) {
                this.name = name;
                this.id = id;
                this.email = email;
                validations.listOfIDs.push(this.id);
            } else throw new Error("This is not a valid email.");
       } else throw new Error("This is not a valid ID.");
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;