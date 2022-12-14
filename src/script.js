

var profileUl = document.getElementById("profile");

function profileBuilder() {

    employees.forEach(employee => {

        var outerLi = document.createElement("li");
        outerLi.setAttribute("class", employee.role);
        
        var titleUl = document.createElement("ul");
        titleUl.setAttribute("class", "title");
    
        var nameLi = document.createElement("li");
        nameLi.setAttribute("class", "name");
        nameLi.innerHTML = employee.name;
        titleUl.appendChild(nameLi);
    
        var roleLi = document.createElement("li");
        roleLi.setAttribute("class", "role");
        roleLi.innerHTML = employee.role;
        titleUl.appendChild(roleLi);
    
        var infoUl = document.createElement("ul");
        infoUl.setAttribute("class", "info");
    
        var idLi = document.createElement("li");
        idLi.setAttribute("class", "id");
        idLi.innerHTML = "ID: " + employee.id;
        infoUl.appendChild(idLi);
    
        var emailLi = document.createElement("li");
        emailLi.setAttribute("class", "email");
        emailLi.innerHTML = "Email: <a href='mailto:" + employee.email +"'>" + employee.email + "</a>";
        infoUl.appendChild(emailLi);
    
        outerLi.appendChild(titleUl);
        outerLi.appendChild(infoUl);

        if (employee.role == "Manager") {
            
            var officeNumberLi = document.createElement("li");
            officeNumberLi.setAttribute("class", "officeNumber");
            officeNumberLi.innerHTML = "Office Number: " + employee.officeNumber;
            infoUl.appendChild(officeNumberLi);

        } else if (employee.role == "Engineer") {

            var githubLi = document.createElement("li");
            githubLi.setAttribute("class", "github");
            githubLi.innerHTML = "GitHub: <a href='https://github.com/" + employee.github + "' target='_blank'>" + employee.github + "</a>";
            infoUl.appendChild(githubLi);

        } else if (employee.role == "Intern") {

            var schoolLi = document.createElement("li");
            schoolLi.setAttribute("class", "school");
            schoolLi.innerHTML = "School: " + employee.school;
            infoUl.appendChild(schoolLi);
            
        }
        
        profileUl.appendChild(outerLi);
    });
}

profileBuilder();
