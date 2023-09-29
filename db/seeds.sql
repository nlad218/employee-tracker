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
    ('Maya', 'Nettath', 2, null),
    ('Liam', 'Marincik', 3, null),
    ('Nick', 'Deignan', 1, 1),
    ('Steven', 'Rodriguez', 5, null),
    ('Joshua', 'Kellog', 4, 4),
    ('Riley', 'Hettrick', 6 , 6),
    ('Justin', 'Moore', 7 , null),
    ('Rebecca', 'Wang', 8, 8),
    ('Austin', 'Sigsworth', 9, null);