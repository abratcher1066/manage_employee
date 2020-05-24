//Dependencies 
const inquirer = require("inquirer");
const mysql = require("mysql");
const fs = require('fs');
const axios = require("axios");
const path = require("path");
const consoletable = require("console.table");

// MySQL Database connection info
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "dbschema"
})

// Welcome message
var onStartup = true;

// Initiating mySQL connection:
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to employee database as id " + connection.threadId + "\n");
    welcomeMenu();
    // add code to begin function
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MAIN MENU

function welcomeMenu() {
    if(onStartup==true) {
        console.log("Welcome to the RobCo employee database system. Remember that stopping corporate espionage is **everyone's** responsibility.");
        }
    console.log("Loading main menu... Please wait...")
    inquirer.prompt([
        {
            type: 'list',
            name: 'main_menu',
            message: "Select an option below:",
            choices: [
                'VIEW the database', 
                'ADD a new employee, job, or department', 
                'UPDATE an existing employee or manager', 
                'EXIT the database'
            ]
        }

    ]).then(userChoice => {
        switch (userChoice.main_menu) {
            case 'VIEW the database': goToViewDatabaseMenu();
                break;
            case 'ADD a new employee, job role, or department' : goToAddMenu();
                break;
            case 'UPDATE an existing employee or manager' : goToUpdateMenu();
                break;
            case 'EXIT the database' : quitProgram();
        }
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Planned menu pathing:
// VIEW --> 
//  +View everything
//  +View employees
//  +View roles
//  +View departments

// ADD -->
//  (done!) +Add new employee
//  (done!) +Add new role
//  (done!) +Add new department

// UPDATE -->
//  +Update employee role
//  +Update employee manager
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SUB-MENU NAVIGATION

function goToViewDatabaseMenu() {
    // use (console.table) in this code
    // menu options:
        // view everything 
        // view employees
        // view roles
        // view departments
}

function goToAddMenu() {
    // menu options:   
        //  +Add new employee
        //  +Add new role
        //  +Add new department
}

function goToUpdateMenu() {
    // menu options:
        //  +Update employee role
        //  +Update employee manager
}

function quitProgram() {
    // code for quitting app and disconnecting
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          Sub-Menu Functions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// VIEW MENU
// VIEW --> 
//  +View everything
//  +View employees
//  +View roles
//  +View departments
function viewEverything() {

};
// ~~~~~~~~~~~~~~~~
function viewEmployees() {
    
};
// ~~~~~~~~~~~~~~~~
function viewDepartments() {

};
// ~~~~~~~~~~~~~~~~
function viewRoles() {

};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ADD MENU
// ADD -->
//  +Add new employee
//  +Add new role
//  +Add new department
const validJobId(answer) {
    var isnum = /^\d$/.test(answer);
    if(isNaN(answer)){
        return "Please enter a number."
    }
    if(isnum === false){
      return "Please enter a single number, 1-3."
    }
    if(answer == "") {
      return "Please enter at least one character."
    }
    return true;
}

function addNewEmployee() {
    inquirer.prompt([
        {
            name: 'first_name'
            type: 'input',
            message: "Please enter employee's FIRST name:"
        },
        {
            name: 'last_name'
            type: 'input',
            message: "Please enter employee's LAST name:"
        },
        {
            name: 'position_id'
            type: 'input',
            message: "| ('1' - Engineer || '2' - Technician || '3' - Operative ) |  Please enter employee's ROLE ID#:"
            validate: validJobId
        },
        {
            name: 'manager_id'
            type: 'input',
            message: "Please enter the MANAGER ID# of this employee's manager:"
            // validate: validManagerId --- code to summon up existing managers and make sure # is a valid choice
            // with more time, program would check manager and role #s and display them back to the user
            // so the user wouldn't have to remember manager ids, get better confirmation msgs, etc. etc. 
        }
    ]).then (data => {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: data.first_name,
                last_name: data.last_name,
                position_id: data.position_id,
                manager_id: data.managerId
            },
            function(err, res) {
                if (err) throw err;
                console.log('New employee' + data.first_name + " " + data.last_name + "has been added to the system.");
                console.log("You will now be returned to the main menu.")
                onStartup = false;
                welcomeMenu();
            }
        );
    });
}

function addNewDepartment() {
    inquirer.prompt([
        {
            name: 'department'
            type: 'input',
            message: "Please enter a name for the new department:"
            // validate: code to check if dept. already exists
        }
    ]).then (data => {
        connection.query(
            'INSERT INTO department SET ?',
            {
                name: data.department
            },
            function(err, res) {
                if (err) throw err;
                console.log('New department:' + ' "'+ data.department +'" ' + 'has been added to the system.');
                console.log("You will now be returned to the main menu.")
                onStartup = false;
                welcomeMenu();
            }
        );
    });
}

function addNewRole() {
    inquirer.prompt([
        {
            name: 'title'
            type: 'input',
            message: "Please enter a title for the new position/role:"
            // validate: code to check if position already exists
        },
        {
            name: 'salary'
            type: 'input',
            message: " (WARNING: INCLUDE CENTS BUT NOT THE DECIMAL POINT -- Format ex. $50,000.00 = '5000000' ; $122,375.62 = '12237562' ) Please enter a starting salary for the new role:"
        },        
    ]).then (data => {
        connection.query(
            'INSERT INTO position SET ?',
            {
                title: data.title,
                salary: data.salary
            },
            function(err, res) {
                if (err) throw err;
                console.log('New role:' + ' "'+ data.title +'" ' + 'has been added to the system.');
                console.log("You will now be returned to the main menu.")
                onStartup = false;
                welcomeMenu();
            }
        );
    });
}


// ~~~~~~~~~~
// ~~~~~~~~~~









// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// UPDATE MENU
// UPDATE -->
//  +Update employee role
//  +Update employee manager