//Dependencies 

const inquirer = require("inquirer");
const mysql = require("mysql");

// MySQL Database connection info
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "employeeDB"
})

// Initiating mySQL connection:
connection.connect(function(err) {
    if (err){
        throw err
    }
    // add code to begin function
});

