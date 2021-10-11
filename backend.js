const sql = require('mysql');

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'com21120',
    database: 'darmasr_db'
});

function createDBConenection()
{
    db.connect((err) => {
        if(err) throw err;
        console.log('Connected!');
    });
}

function validateInput(username, pwd, callback){
    let nameFromDB = '';
    let sql = 'SELECT Name from owner where userName=\'' + username + '\'' + ' AND password = \''+ pwd + '\';';
    db.query(sql,(err,result)=>{
        if (err)
        {
            console.log(err);
            nameFromDB = 'error';
            throw err;
            
        }
        else{
            if (result != ''){
                console.log("from backend: "+ result[0].Name)
                return callback(result[0].Name);
            }    
            else{
                return callback('Wrong User');
            }   

        }
        
    });
    //console.log('namefromDB: ' + promisedName);
}
module.exports.createDBConenection = createDBConenection;
module.exports.validateInput = validateInput;
