const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var db = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '1q2w3e4R%',
  database        : 'mt'
});

app.post('/signup', (req,res) => {
  const Name = req.body.name;
  const ConnectionId = req.body.ConnectionId;
  db.query("INSERT INTO Router (Name, ConnectionId) VALUES (?, ?)",[Name, ConnectionId], (err,result) =>{
    if(err){
    console.log(err)
    }else{
    res.send({Name: Name})
    }
  })
  res.send('Test')
})


app.listen(3005,() => {
console.log('server listening on port 3005');
})
