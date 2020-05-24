USE employee_db;

INSERT INTO department (department )
VALUES ("R&D: Civilian");

INSERT INTO department (department)
VALUES ("R&D: Military");

INSERT INTO department (department)
VALUES ("Applied Cryogenics");


INSERT INTO position (title, salary, department_id)
VALUES ("Engineer", 5000000, 1);

INSERT INTO position (title, salary, department_id)
VALUES ("Technician", 22500050, 3);

INSERT INTO position (title, salary, department_id)
VALUES ("Operative", 10800037, 2);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "House", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Benny", "Chairmen", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yes", "Man", 2, 1);