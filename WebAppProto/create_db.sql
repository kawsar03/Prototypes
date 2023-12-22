-- Create the database
CREATE DATABASE inventory;
USE inventory;

-- User Details Table
CREATE TABLE IF NOT EXISTS User (
    userId INTEGER PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    hashedPassword VARCHAR(255)
);

-- Stock Inventory Table
CREATE TABLE IF NOT EXISTS Inventory (
    itemId INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    upc VARCHAR(255),
    quantity INTEGER,
    expiry DATE,
    dateAdded DATE,
    datePurchase DATE,
    wholesalePrice DOUBLE,
    retailPrice DOUBLE
);

-- Insert some sample data into User and Inventory tables (optional)
INSERT INTO User (username, firstName, lastName, email, hashedPassword)
VALUES ('sampleUser', 'John', 'crow', 'crow@example.com', 'hashed_password');

INSERT INTO Inventory (name, upc, quantity, expiry, dateAdded, datePurchase, wholesalePrice, retailPrice)
VALUES ('Sample Item', '123456789', 50, '2023-12-31', '2023-01-01', '2023-01-15', 5.99, 9.99);

GRANT ALL PRIVILEGES ON inventory.* TO 'appuser'@'localhost';
