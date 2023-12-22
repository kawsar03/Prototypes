module.exports = function(app, shopData) {
// Add a new route to render the page for adding stock
app.get('/', function (req, res) {
    res.render('index.ejs', shopData);
});

// Add a new route to handle the form submission for adding stock
app.post('/stockAdded', function (req, res) {
    // Extract the data from the request body
    const { name, upc, quantity, expiry, dateAdded, datePurchase, wholesalePrice, retailPrice } = req.body;

    // Insert the data into the Inventory table
    let sqlInsert = "INSERT INTO Inventory (name, upc, quantity, expiry, dateAdded, datePurchase, wholesalePrice, retailPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [name, upc, quantity, expiry, dateAdded, datePurchase, wholesalePrice, retailPrice], (err, result) => {
        if (err) {
            console.error(err);
            res.send("Error adding stock");
        } else {
            console.log('Stock added with ID: ', result.insertId);
            res.redirect('/list');  // Redirect to the list page or wherever you want
        }
    });
});

}
