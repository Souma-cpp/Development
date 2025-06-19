-- Example: SQL Relationships, Primary Key, Foreign Key, and Joins

-- 1. Create tables with PRIMARY KEY and FOREIGN KEY

-- One-to-One Relationship Example
CREATE TABLE Person (
    person_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Passport (
    passport_id INT PRIMARY KEY,
    person_id INT UNIQUE, -- Ensures one-to-one
    passport_number VARCHAR(50),
    FOREIGN KEY (person_id) REFERENCES Person(person_id)
);

-- One-to-Many Relationship Example
CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100)
);

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

-- Many-to-Many Relationship Example (using a junction table)
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE Course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

CREATE TABLE StudentCourse (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);

-- 2. Insert sample data

INSERT INTO Person VALUES (1, 'Alice');
INSERT INTO Passport VALUES (101, 1, 'A1234567');

INSERT INTO Department VALUES (10, 'HR'), (20, 'Engineering');
INSERT INTO Employee VALUES (1001, 'Bob', 10), (1002, 'Carol', 20);

INSERT INTO Student VALUES (201, 'David'), (202, 'Eva');
INSERT INTO Course VALUES (301, 'Math'), (302, 'Science');
INSERT INTO StudentCourse VALUES (201, 301), (201, 302), (202, 301);

-- 3. JOINS

-- INNER JOIN: Employees with their Departments
SELECT e.emp_name, d.dept_name
FROM Employee e
INNER JOIN Department d ON e.dept_id = d.dept_id;

-- LEFT JOIN: All Students and their Courses (if any)
SELECT s.student_name, c.course_name
FROM Student s
LEFT JOIN StudentCourse sc ON s.student_id = sc.student_id
LEFT JOIN Course c ON sc.course_id = c.course_id;

-- RIGHT JOIN: All Courses and enrolled Students (if any)
SELECT c.course_name, s.student_name
FROM Course c
RIGHT JOIN StudentCourse sc ON c.course_id = sc.course_id
RIGHT JOIN Student s ON sc.student_id = s.student_id;

-- FULL OUTER JOIN (not supported in all SQL dialects)
-- Shows all students and all courses, matching where possible
SELECT s.student_name, c.course_name
FROM Student s
FULL OUTER JOIN StudentCourse sc ON s.student_id = sc.student_id
FULL OUTER JOIN Course c ON sc.course_id = c.course_id;

-- Explanation:
-- PRIMARY KEY uniquely identifies each row in a table.
-- FOREIGN KEY links one table to another, enforcing referential integrity.
-- Joins combine rows from two or more tables based on related columns.