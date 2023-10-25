const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
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

app.get('/', (req,res) => {
  db.query("INSERT INTO Router (username, password) VALUES ('Testing','123')",(err,result)=>{
    if(err){
    console.log(err)
    }else{
    console.log(result)
    }
  })
  res.send('Test')
})

app.listen(3000,() => {
console.log('server listening on port 3000');
})

//https://www.youtube.com/watch?v=syA6vUaZtOM