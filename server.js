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
    if(onStartup==true) {console.log("Welcome to the RobCo employee database system.");
    console.log("Remember that stopping corporate espionage is **everyone's** responsibility.");
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
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Planned menu pathing:
// VIEW --> 
//  +View everything
//  +View employees
//  +View roles
//  +View departments

// ADD -->
//  +Add new employee
//  +Add new role
//  +Add new department

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

}
// ~~~~~~~~~~~~~~~~
function viewRoles() {

}
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
            name: 'first_name'
            type: 'input',
            message: "| ('1' - Engineer || '2' - Technician || '3' - Operative ) |  Please enter employee's JOB ID#:"
            validate: validJobId
        },
        {
            name: 'first_name'
        }
    ]).then (data => {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: data.first_name,
                last_name: data.last_name,
                employee
            },
        )
    })
}





// ~~~~~~~~~~
// CODE FOR POSTING EMPLOYEE USING ENTERED DATA:
// TBD
// example below
function createProduct(newProduct) {
    console.log("Inserting a new product...\n");
    const query = connection.query(

        "INSERT INTO products SET ?",
        newProduct, // the object that that the wildcard represents.
        function(err, res){
            if (err) throw err;
            console.log(res.affectedRows + " product inserted!\n");
            //Call updateProduct AFTER the INSERT completes
            updateProduct(); // normally you wouldn't call an update function right after you do an insert, that's just for this exercise 
        }
}
// ~~~~~~~~~~









// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// UPDATE MENU
// UPDATE -->
//  +Update employee role
//  +Update employee manager