const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');
// const content = $('#content')

var managerHtml = '';
var allEngs = '';
var allInterns = '';
const engineers = [];
const interns = [];

const addManager = () => {
    inquirer.
        prompt([
            {
                type: 'input',
                name: 'manager',
                message: 'What is your team Manager\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your team Manager\'s ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your team Manager\s email address?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your team Manager\s office number?'
            }])
        .then((res) => {
            const manager = new Manager(res.manager, res.id, res.email, res.office);
            // team.push(manager);
            const html = `<div id="manager">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  <h3>${manager.getName()}<h3>
                  <span class="material-icons">
                    manage_accounts
                    </span><h4>${manager.getRole()}<h4>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a target="blank_" class="mailto" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
                </ul>
              </div>
        </div>`
            menu();
            managerHtml = html;
        });



}

const menu = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'choice',
            message: 'Please choose one of the following options.',
            choices: ['Add an Engineer.', 'Add an Intern.', 'Finish building your team.']
        }])
        .then((res) => {
            if (res.choice === 'Add an Engineer.') {
                addEngineer();
            }
            if (res.choice === 'Add an Intern.') {
                addIntern();
            }
            if (res.choice === 'Finish building your team.') {
                renderHMTL();
            }
        })
}

const addEngineer = () => {
    inquirer.
        prompt([
            {
                type: 'input',
                name: 'engineer',
                message: 'What is this Engineer\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this Engineer\'s ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this Engineer\s email address?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is this Engineer\s GitHub username?'
            }])
        .then((res) => {
            const engineer = new Engineer(res.engineer, res.id, res.email, res.github);
            engineers.push(engineer);
            menu();
        });

}
const addIntern = () => {
    inquirer.
        prompt([
            {
                type: 'input',
                name: 'intern',
                message: 'What is this Intern\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this Intern\'s ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this Intern\'s email address?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school is this Intern from?'
            }])
        .then((res) => {
            const intern = new Intern(res.intern, res.id, res.email, res.school);
            interns.push(intern);
            menu();
        });

}

const renderHMTL = () => {
    if (engineers.length >= 1) {
        engineers.forEach((res) => {
            const interhtml = `<div id="engineer">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  <h3>${res.getName()}<h3>
                  <span class="material-icons">
                    person_search
                    </span><h4>${res.getRole()}<h4>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${res.getId()}</li>
                  <li class="list-group-item">Email: <a target="blank_" class="mailto" href="mailto:${res.getEmail()}">${res.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a target="blank_" href="https://github.com/${res.getGitHub()}">${res.getGitHub()}<a></li>
                </ul>
              </div>
        </div>`;
            allEngs += interhtml
        });

    } else {
        allEngs = '';
    }
    if (interns.length >= 1) {
        interns.forEach((res) => {
            const internhtml = `<div id="intern">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h3>${res.getName()}<h3>
              <span class="material-icons">
                emoji_people
                </span><h4>${res.getRole()}<h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${res.getId()}</li>
              <li class="list-group-item">Email: <a target="blank_" class="mailto" href="mailto:${res.getEmail()}">${res.getEmail()}</a></li>
              <li class="list-group-item">School Name: ${res.getSchoolName()}</li>
            </ul>
          </div>
    </div>`;
            allInterns += internhtml;
        });

    } else {
        allInterns = '';
    }
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="style.css">

    <title>Team Profile</title>
</head>

<body>
    <div class="jumbotron">
        <h1 class="display-4" style="text-align: center;">My Team!</h1>

    </div>
    <div id="content" class="row">
    ${managerHtml}
    ${allEngs}
    ${allInterns} 
    </div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="../index.js"></script>
</body>

</html>`;
    fs.writeFile('./dist/index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('successfully created index.html file')
    );
};

addManager()
