import SQLite from 'react-native-sqlite-storage';

// Open a database connection
const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });

// Create tables if they don't exist
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS User (userId INTEGER PRIMARY KEY, username TEXT NOT NULL, firstName TEXT, lastName TEXT, email TEXT, hashedPassword TEXT);'
  );
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Inventory (itemId INTEGER PRIMARY KEY, name TEXT NOT NULL, upc TEXT, quantity INTEGER, expiry DATE, dateAdded DATE, datePurchase DATE, wholesalePrice REAL, retailPrice REAL);'
  );
});

// Inserting a user
db.transaction((tx) => {
  tx.executeSql(
    'INSERT INTO User (username, firstName, lastName, email, hashedPassword) VALUES (?, ?, ?, ?, ?);',
    ['kawsarL', 'Kawsar', 'Latif', 'kawsar@example.com', 'hashed_password'],
    (tx, results) => {
      console.log('User inserted with ID: ', results.insertId);
    }
  );
});

// Inserting an item into inventory
db.transaction((tx) => {
  tx.executeSql(
    'INSERT INTO Inventory (name, upc, quantity, expiry, dateAdded, datePurchase, wholesalePrice, retailPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    ['Item Name', '123456789', 10, '2023-12-31', '2023-01-01', '2023-01-15', 5.99, 9.99],
    (tx, results) => {
      console.log('Item inserted with ID: ', results.insertId);
    }
  );
});
