const backend = require('./backend.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const { ok } = require('assert/strict');

const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use('/style',express.static(path.join(__dirname,'static','css')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');

console.log(path.join(__dirname,"static","index.html"));

//function mwInit()
//{
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,"views","index.html"));
    });
    app.listen(3000);


    backend.createDBConenection();
//}

    app.get('/newuser',(req,res)=>{
        res.sendFile(path.join(__dirname,"views","newuser.html"));
    });

    app.post('/signin',(req,res)=>
    {
        backend.validateInput(req.body.Uname, req.body.Pass,(result)=>{
            console.log('from middleware: ' + result);
            if(result != 'Wrong User')
            {
                res.render('index',{data : {username: result}});
            }
            else{
                res.render('Home',{data : {resultInput: result}});
               // res.sendFile(path.join(__dirname,"views","index.html"));
            }
        });
        
       // res.send('Check user!');
    });