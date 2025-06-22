# Relations in Relational Databases (PostgreSQL Perspective)

In relational databases like PostgreSQL, relationships between tables are fundamental to organizing and querying data efficiently. The main types of relationships are:

## 1. One-to-One (1:1) Relationship

**syntax :**

    CREATE TABLE STUDENT (
        ID INTEGER SERIAL PRIMARY KEY ,
        NAME TEXT
    );

    CREATE TABLE CONTACT_DETAILS(
        ID INTEGER REFERENCES STUDENT(ID) UNIQUE ,
        GUARDIAN TEXT
    );

**when doing join :**

    SELECT * FROM STUDENT JOIN CONTACT_DETAILS ON STUDENT.ID = CONTACT_DETAILS.ID ;

- **Definition:** Each row in Table A is linked to one and only one row in Table B, and vice versa.
- **Implementation:** Use a UNIQUE constraint or PRIMARY KEY on the foreign key column.
- **Example:**

  - `users` table and `user_profiles` table, where each user has one profile.

  ## 2. One-to-Many (1:N) Relationship

**syntax :**

    CREATE TABLE STUDENT (
        ID SERIAL PRIMARY KEY ,
        NAME TEXT
    );

    CREATE TABLE HOMEWORK_SUBMISSION(
        HOMEWORK_ID SERIAL PRIMARY KEY ,
        MARKS INTEGER ,
        STUDENT_ID INTEGER REFERENCES STUDENT(ID)
    );

**when doing join :**

    SELECT * FROM STUDENT JOIN HOMEWORK_SUBMISSION ON STUDENT.ID = STUDENT.ID ;

- **Diagram:**

  ```
  users                user_profiles
  -----------          --------------
  id (PK)              id (PK, FK to users.id)
  username             bio
  email                avatar_url
  ```

- **Definition:** A row in Table A can be related to many rows in Table B, but a row in Table B is related to only one row in Table A.
- **Implementation:** Add a foreign key in Table B referencing the primary key of Table A.
- **Example:**
  - `customers` table and `orders` table, where each customer can have multiple orders.

## 3. Many-to-Many (M:N) Relationship

**syntax :**

    CREATE TABLE STUDENT (
        STUDENT_ID INTEGER SERIAL PRIMARY KEY ,
        NAME TEXT
    );

    CREATE TABLE CLASS (
        CLASS_ID INTEGER SERIAL PRIMARY KEY ,
        SUBJECT TEXT
        NUMBER_OF_STUDENTS INTEGER
    );

    CREATE TABLE ENROLLMENT(
        STUDENT_ID INTEGER REFERENCES STUDENT(STUDENT_ID) ,
        CLASS_ID INTEGER REFERENCES CLASS(CLASS_ID) ,
        PRIMARY KEY(CLASS_ID , STUDENT_ID)
    );

**when doing join :**

    SELECT *
    FROM STUDENT
    JOIN ENROLLMENT ON STUDENT.STUDENT_ID = ENROLLMENT.STUDENT_ID
    JOIN CLASS ON ENROLLMENT.CLASS_ID = CLASS.CLASS_ID;

- **Definition:** Rows in Table A can relate to many rows in Table B and vice versa.
- **Implementation:** Use a junction (association) table with foreign keys referencing both tables.
- **Example:**

  - `students` table and `courses` table, with a `student_courses` junction table to track enrollments.
  - **Diagram (One-to-Many):**

    ```
    customers             orders
    -----------           -----------
    id (PK)               id (PK)
    name                  order_date
    email                 customer_id (FK to customers.id)
    ```

  - **Diagram (Many-to-Many):**

    ```
    students              student_courses            courses
    -----------           -----------------          -----------
    id (PK)               student_id (FK)            id (PK)
    name                  course_id (FK)             title
                          PRIMARY KEY (student_id, course_id)
    ```

## 4. Self-Referencing (Recursive) Relationship

- **Definition:** A table has a relationship with itself.
- **Implementation:** Add a foreign key in the table that references its own primary key.
- **Example:**
  - `employees` table where each employee may have a `manager_id` referencing another employee.

---

**Note:** Enforcing referential integrity in PostgreSQL is typically done using `FOREIGN KEY` constraints.
