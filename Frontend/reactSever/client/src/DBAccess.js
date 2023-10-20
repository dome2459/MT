var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "'");
    res.setHeader("Access-Control-Allow-Methodes", "OPTIONS,GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ' root',
    database: 'mydb'
});
con.connect(function(err){
    if(err) throw err;
});
app.get('/getUser', function(req, res){
    var sql = "SELECT * FROM Router";
    con.query(sql, function(err, result){
        if(err) throw err;
        res.send(result);
    });
});
app.listen(3000);
 