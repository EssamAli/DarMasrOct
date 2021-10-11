//const mw = require('../middleware.js');

//mw.mwInit();
console.log('Client side is running!');

const button = document.getElementById('log');
button.addEventListener('click',(err)=>{
    if(err) console.log(err);
    console.log('Clicked!');
    //fetch('/signin', {method: 'POST'}).then((response)=>{
      //   if(response.ok)
    // })
    //mw.validateInput(document.getElementById('Uname').innerHTML,document.getElementById('Pass').innerHTML)
     //document.getElementById('Uname').innerHTML;

});