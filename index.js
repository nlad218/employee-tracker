const inquirer = require("inquirer");
const db = require("./db/connection.js");
require("console.table");

const utils = require("util");
db.query = utils.promisify(db.query);

const logo = require("asciiart-logo");
const { async } = require("rxjs");

function init() {
  const logoText = logo({ name: "Employee Info Management" }).render();
  console.log(logoText);
  startApp();
}
init();

function startApp() {
  inquirer
    .prompt([
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

async function viewDepts() {
  const departments = await db.query("Select * from department");
  console.table(departments);
  startApp();
}

async function viewRoles() {
  const roles = await db.query(
    "Select role.title, role.salary, department.name from role join department on role.department_id = department.id"
  );
  console.table(roles);
  startApp();
}

async function viewEmployees() {
  const employees =
    await db.query(`SELECT employee.id, employee.first_name AS "first name", employee.last_name 
    AS "last name", role.title, department.name AS department, role.salary, 
    concat(manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role
    ON employee.role_id = role.id
    LEFT JOIN department
    ON role.department_id = department.id
    LEFT JOIN employee manager
    ON manager.id = employee.manager_id`);
  console.table(employees);
  startApp();
}

async function addEmployee() {
  let employees = await db.query(
    "Select id as value, concat(first_name, ' ', last_name) as name from employee"
  );
  employees = [...employees, { value: null, name: "no manager" }];
  const roles = await db.query("Select id as value, title as name from role");
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "fname",
      message: "What is the new employees first name?",
    },
    {
      type: "input",
      name: "lname",
      message: "What is the new employees last name?",
    },
    {
      type: "list",
      name: "roleid",
      message: "What is the new employees role?",
      choices: roles,
    },
    {
      type: "list",
      name: "managerid",
      message: "Who is the new employees manager",
      choices: employees,
    },
  ]);
  await db.query(
    "Insert into employee (first_name, last_name, role_id, manager_id) values(?,?,?,?)",
    [answers.fname, answers.lname, answers.roleid, answers.managerid]
  );
  console.log("New employee successfully added!");
  startApp();
}

async function addDepartment() {
  let department = await db.query("Select id as value from department");
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "ndepartment",
      message: "What is the name of the new department?",
    },
  ]);
  await db.query("Insert into department (department_id) values(?)", [
    answers.ndepartment,
  ]);
  console.log("New department successfully added!");
  startApp();
}

async function addRole() {
  let role = await db.query("Select id as value from role");
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "nrole",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "nsalary",
      message: "What is the salary of the role?",
    },
    {
      type: "list",
      name: "departmentid",
      message: "What department does the role belong to?",
      choices: departments,
    },
  ]);
  await db.query("Insert into role () values (");
  console.log("New role successfully added!");
  startApp();
}

async function updateEmployee() {}
