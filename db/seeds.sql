INSERT INTO department (name)
VALUES ('Development'), ('Finance'), ('Legal'), ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Project Manager', 160000, 1), 
('Sr. Developer', 130000, 1),
('Jr. Developer', 90000, 1), 
('Sales Manager', 100000, 4 ), 
('Account Executive', 85000, 4), 
('Head Accountant', 140000, 2),
('Accountant', 125000, 2), 
('Head Legal Advisor', 200000, 3),
('Lawyer', 180000, 3);

INSERT INTO 
    employee (
        first_name,
        last_name,
        role_id,
        manager_id
    
    )
    VALUES
    ('Maya', 'Nettath', 2, 3),
    ('Liam', 'Marincik', 3, 3),
    ('Nick', 'Deignan', 1, null),
    ('Steven', 'Rodriguez', 5, 5),
    ('Joshua', 'Kellog', 4, null),
    ('Riley', 'Hettrick', 6 , null),
    ('Justin', 'Moore', 7 , 6),
    ('Rebecca', 'Wang', 8, null),
    ('Austin', 'Sigsworth', 9, 8);