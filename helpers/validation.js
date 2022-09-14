const listOfIDs = [];

function validateId(id) {
    id = +id;
    if (isNaN(id)) return "it is not a number";
    if (listOfIDs.includes(id)) {
        return "This id is taken."
    } else return true;
}

function validateEmail(email) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailFormat)) {
        return true;
    } else return("This is not a valid email.");
}

function validatePositiveNumber(number) {
    number = +number;
    if (isNaN(number)) return "it is not a number";
    if (number < 0) return "it is not a positive number";
    return true;
}

module.exports = {
    listOfIDs, validateId, validateEmail, validatePositiveNumber
}