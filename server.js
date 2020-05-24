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
viewEverything() {

}
// ~~~~~~~~~~~~~~~~
viewEmployees() {
    
}
// ~~~~~~~~~~~~~~~~
viewDepartments() {

}
// ~~~~~~~~~~~~~~~~
viewRoles() {

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ADD MENU