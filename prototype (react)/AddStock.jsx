// Prototype to show the page where you can add stock
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });

const AddStock = () => {
  const [itemName, setItemName] = useState('');
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleAddStock = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Inventory (name, upc, quantity, expiry, dateAdded, datePurchase, wholesalePrice, retailPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        [itemName, upc, quantity, expiry, getCurrentDate(), getCurrentDate(), 0.0, 0.0],
        (tx, results) => {
          console.log('Item inserted with ID: ', results.insertId);
          // Add any additional logic after item insertion
        }
      );
    });
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  };

  return (
    <View>
      <Text>Item Name:</Text>
      <TextInput value={itemName} onChangeText={setItemName} />

      <Text>UPC:</Text>
      <TextInput value={upc} onChangeText={setUpc} />

      <Text>Quantity:</Text>
      <TextInput value={quantity} onChangeText={setQuantity} keyboardType="numeric" />

      <Text>Expiry Date:</Text>
      <TextInput value={expiry} onChangeText={setExpiry} />

      <Button title="Add Stock" onPress={handleAddStock} />
    </View>
  );
};

export default AddStock;
