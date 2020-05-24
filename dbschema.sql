-- boilerplate
DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;
USE employee_db

-- design the following database schema containing three tables:

-- department
  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name
-- role
  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to
-- employee
  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
-------------------------------------------
-- creating table: department
CREATE TABLE department (
    --id column, name of department column, setting primary key
    id INTEGER(3) AUTO_INCREMENT NOT NULL,
    department VARCHAR (30),
    PRIMARY KEY (id)
);

-- creating table: role
CREATE TABLE role ( 
    --id, role's title, role's salary, #id of department where role works, set primary key
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(8,2), --this should give us up to six figures (that's plenty, right?)
    department_id INT,
    PRIMARY KEY(id)
);

-- creating table: employee
CREATE TABLE employee (
    --id, first name, last name, role id# of employee (what their job is), id# of employee's manager, set primary key
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY(id)
);