const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
})

app.post('/signup', (req, res)=> {
    const sql = 'INSERT INTO userdata (`name`, `email`,`password`) Values (?)';
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err,data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})
console.log('This is db',db)

app.get('/', (req,res)=> {
    res.send('Hello from server')
})

app.listen(port, ()=> {
    console.log('Server is running')
})