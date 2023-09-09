const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'count',
    table: 'Number'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
})

app.get('/count', (req, res) => {
    con.query("SELECT * FROM number", (err, rows) => {
        if(err) throw err;
        console.log(rows[0]['count']);
        res.json({ count: rows[0]['count'] });
    })
    
})

app.post('/count', (req, res) => {
    con.query("UPDATE number SET count = " + req.body.count + " WHERE id = 1;")
    res.json({status: 200});
})

app.listen(8000, () => {
    console.log('Server is running on port 8000.');
})