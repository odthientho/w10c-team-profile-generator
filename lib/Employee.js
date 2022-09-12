const listOfIDs = [];
class Employee {
    constructor(name, id, email) {

        if (!name || !id || !email) throw new Error("Please input name, id and email.");

       if (this.validateId(id) && this.validateEmail(email)) {
            this.name = name;
            this.id = id;
            this.email = email;
       }
    }

    validateId(id) {
        if (typeof id !== "number") throw new Error("It is not a number!");
        if (listOfIDs.includes(id)) throw new Error("This ID is already taken."); 
        return true;
    }

    validateEmail(email) {
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(emailFormat)) {
            return true;
        } else throw new Error("This is not a valid email.");
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