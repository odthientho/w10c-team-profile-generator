// TODO: Include packages needed for this application
const validations = require('./helpers/validation');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');

const prompt = inquirer.createPromptModule();
let employeeType = "Manager";

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is " + employeeType + "'s name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is " + employeeType + "'s email?",
        validate: (email) => validations.validateEmail(email)
    },
    {
        type: "input",
        name: "id",
        message: "What is " + employeeType + "'s id?",
        validate: (id) => validations.validateId(id)
    }
]

const managerQuestion = [{
    type: "input",
    name: "officeNumber",
    message: "What is " + employeeType + "'s office number?",
    validate: (officeNumber) => validations.validatePositiveNumber(officeNumber)
}]

const addingRoleQuestion = [{
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Not Adding Any More"]

}]

// Start with create manager profile
// managerPrompt: prompt to ask MANAGER profile
managerPrompt();
function managerPrompt() {
    let questions = employeeQuestions.concat(managerQuestion);
    prompt(questions)
    .then((data) => {
        let manager = new Manager(data.name, parseInt(data.id), data.email, parseInt(data.officeNumber));

        addingRolePrompt();
    })
    .catch((err) => {
        console.log(err);
    });
}

// prompt to ask which roles user wants to add
function addingRolePrompt() {
    let questions = addingRoleQuestion;
    prompt(questions)
    .then((data) => {
        employeeType = data.role;
        if (employeeType == "Engineer") console.log("Engineer");
        else if (employeeType == "Intern") console.log("Intern");
        else console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

}

function writeToFile(fileName, data) {
    const fileREADME = fileName.split('/')[2];
    const pathToREADME = fileName.replace(fileREADME,"");

    fs.mkdir(pathToREADME, { recursive: true }, (err) => { if (err) throw err; });
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}