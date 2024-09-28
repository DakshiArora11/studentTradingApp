//npm init
const express  = require('express')
const abc= require ('\.xyz')
const app=express()
const person=[{
    name: 'Dakshi',
    age:'18'
}, 
]

const helloRoutes=require('./routes/hello.route')
const userRoutes=require('./routes/user.route')
app.user('/',helloRoutes)
//GET: read the data, POST:create the data, PUT: update the data, DELETE: delete the data
app.get('/hello', (req, res)=>{
    try{
        res.send('helo World')
    }catch{
        console.log('incorrect')
    }
}) //routing information:
//http require, // http response
app.get('/alluser', (req,res)=>{
    try{
        let name = req.params.name;
        //Logic
        //
        res.send(person)
    }catch(err){
        res.send('ERR');
    }
})
app.listen(3000, ()=>{
    console.log('HI DAKSHI')
})


//create, update, delete cud
//about api//params
//name search, details, if not found return nothing 
//user authentication, user , name, password,, user password is correct or not, basically string comparison
// post, delete
//way to create a projects

//npm load //gitHub: push 
//git add . 
//git commit -a 