const inquirer = require("inquirer");
const db = require("./db/connection.json");
require("console.table");

const utils = require("util");
db.query = utils.promisify(db.query);

const logo = require("asciiart-logo");

function init() {
  const logoText = logo({ name: "Employee Info Management" }).render();
  console.log(logoText);
  startApp();
}

function startApp() {
  inquirer
    .createPromptModule([
      {
        type: "list",
        name: "choice",
        message: "Choice what you would like to do",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then((options) => {
      switch (options.choice) {
        case "View all departments":
          viewDepts();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "View all employees":
          viewEmployees();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update an employee role":
          updateEmployee();
          break;

        case "View all departments":
          viewDepts();
          break;

        case "Quit":
          db.close();
      }
    });
}
