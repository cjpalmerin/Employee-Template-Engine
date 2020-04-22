const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeArray = []

roleSelect();

function roleSelect() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "Please select Manager, Engineer or Intern?",
        name: "role",
        },
    ])
    .then(function(response) {
        if (response.role === 'Manager') {
            managerQuestions();

        }
        if (response.role === 'Engineer') {
            engineerQuestions();

        }
        if (response.role === 'Intern') {
            internQuestions();
            
        }
    });
    }

function managerQuestions() {
 inquirer.prompt([
    {
      type: "input",
      message: "You selected Manager. What is their name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is their id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is their email?",
      name: "email"
    },
    {
        type: "number",
        message: "What is their office number?",
        name: "officeNumber"
      },
  ])
  .then(function(managerRes) {
    employeeArray.push(managerRes);
    console.log(employeeArray);
    addMoreEmployees();
    
  });
}

function engineerQuestions() {
    inquirer.prompt([
       {
         type: "input",
         message: "You selected Engineer. What is their name?",
         name: "name"
       },
       {
         type: "input",
         message: "What is their id?",
         name: "id"
       },
       {
         type: "input",
         message: "What is their email?",
         name: "email"
       },
       {
           type: "number",
           message: "What is their Github username?",
           name: "github"
         },
     ])
     .then(function(engineerRes) {
        render[engineerRes]        
     });
   }

function internQuestions() {
    inquirer.prompt([
       {
         type: "input",
         message: "You selected Intern. What is their name?",
         name: "name"
       },
       {
         type: "input",
         message: "What is their id?",
         name: "id"
       },
       {
         type: "input",
         message: "What is their email?",
         name: "email"
       },
       {
           type: "input",
           message: "What school did they go to?",
           name: "school"
         },
     ])
     .then(function(internRes) {
        render([internRes]);
    });
   }

   function addMoreEmployees() {
    inquirer.prompt([
        {
          type: "input",
          message: "Add another employee? Yes or No?",
          name: "yesOrNo"
        }
    ])
    .then(function(response) {
        if(response.yesOrNo === "Yes") {
            roleSelect();
        }
        if (response.yesOrNo === "No"){
            render(employeeArray);
        }
    });
   }


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.







