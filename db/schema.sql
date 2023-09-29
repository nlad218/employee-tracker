create table department (
    id int auto_increment primary key,
    name varchar(30) not null
);

create table role (
    id int auto_increment primary key,
    title varchar(30) not null,
    salary decimal not null,
    department_id int null
);

create table employee (
    id int auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int
);