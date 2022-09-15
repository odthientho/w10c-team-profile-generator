const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const fs = require('fs');

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

function converting() {
    var employeeList = [];
    var manager = { 
        name: employees.manager.getName(), 
        id: employees.manager.getId(),
        email: employees.manager.getEmail(),
        officeNumber: employees.manager.getOfficeNumber(),
        role: employees.manager.getRole()
    }
    employeeList.push(manager);

    employees.engineers.forEach(data => {
        var engineer = { 
            name: data.getName(), 
            id: data.getId(),
            email: data.getEmail(),
            github: data.getGithub(),
            role: data.getRole()
        }
        employeeList.push(engineer);
    });

    employees.interns.forEach(data => {
        var intern = { 
            name: data.getName(), 
            id: data.getId(),
            email: data.getEmail(),
            school: data.getSchool(),
            role: data.getRole()
        }
        employeeList.push(intern);
    });

    return employeeList;
}

function build() {
    // first of all copy html and css file into dist
    fs.copyFile("./src/index.html", "./dist/index.html", (err) => {
        if (err) console.log(err);
    });
    
    fs.copyFile("./src/reset.css", "./dist/reset.css", (err) => {
        if (err) console.log(err);
    });

    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
        if (err) console.log(err);
    });

    // adding new script.js file to generate profiles
    fs.readFile("./src/script.js", "utf8", function(err, scriptFile) {
        if (err) console.log(err);
        else {
            var data = "var employees = " + JSON.stringify(converting(employees)) + scriptFile;
            fs.writeFile("./dist/script.js", data, (err) => {
                if (err) console.log(err);
            })
        }
    });

    return "Your team site is built. Please check ./dist folder.";
}

module.exports = { addAnEmployee, build };