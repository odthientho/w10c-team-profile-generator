// TODO: Include packages needed for this application
const validations = require('./helpers/validation');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const prompt = inquirer.createPromptModule();

employeeQuestions = (employeeType) => [
    {
        type: "input",
        name: "name",
        message: "What is the " + employeeType + "'s name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the " + employeeType + "'s email?",
        validate: (email) => validations.validateEmail(email)
    },
    {
        type: "input",
        name: "id",
        message: "What is the " + employeeType + "'s id?",
        validate: (id) => validations.validateId(id)
    }
];

const managerQuestion = [{
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    validate: (officeNumber) => validations.validatePositiveNumber(officeNumber)
}]

const engineerQuestion = [{
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub account?"
}]

const internQuestion = [{
    type: "input",
    name: "school",
    message: "What is the intern's school?"
}]

const addingRoleQuestion = [{
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I'm done!"]

}]

// Start with create manager profile
// managerPrompt: prompt to ask MANAGER profile
managerPrompt();
function managerPrompt() {
    let questions = employeeQuestions("manager").concat(managerQuestion);
    prompt(questions)
    .then((data) => {
        let manager = new Manager(data.name, parseInt(data.id), data.email, parseInt(data.officeNumber));
        addingRolePrompt();
    })
    .catch((err) => {
        console.log(err);
    });
}

// engineerPrompt: prompt to ask ENGINEER profile
function engineerPrompt() {
    let questions = employeeQuestions("engineer").concat(engineerQuestion);
    prompt(questions)
    .then((data) => {
        let engineer = new Engineer(data.name, parseInt(data.id), data.email, data.github);
        addingRolePrompt();
    })
    .catch((err) => {
        console.log(err);
    });
}

// internPrompt: prompt to ask INTERN profile
function internPrompt() {
    let questions = employeeQuestions("intern").concat(internQuestion);
    prompt(questions)
    .then((data) => {
        let intern = new Intern(data.name, parseInt(data.id), data.email, data.school);
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
        if (employeeType == "Engineer") engineerPrompt();
        else if (employeeType == "Intern") internPrompt();
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