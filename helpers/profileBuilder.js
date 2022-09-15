const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let employees = {
    'manager': '',
    'engineers': [],
    'interns': []
};

function addAnEmployee(type, employee) {
    switch(type) {
        case "manager":
            employees['manager'] = new Manager(employee.name, parseInt(employee.id), employee.email, parseInt(employee.officeNumber)); 
            break;
        case "engineers": 
            console.log('engineers');
            employees[type].push(new Engineer(employee.name, parseInt(employee.id), employee.email, employee.github));
            break;
        case "interns": 
            console.log('interns');
            employees[type].push(new Intern(employee.name, parseInt(employee.id), employee.email, employee.school));
            break;
    }
}

function build() {
    // first of all copy html and css file into dist
    // adding new script.js file to generate profiles
    return "Your team site is built. Please check ./dist folder.";
}

module.exports = { addAnEmployee, build };