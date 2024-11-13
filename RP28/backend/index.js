const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/User")
const ElistModel = require("./models/EmployeeList")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://boomikavenkatachalam2003:Boomika2003@boomi-shard-00-00.epggr.mongodb.net:27017,boomi-shard-00-01.epggr.mongodb.net:27017,boomi-shard-00-02.epggr.mongodb.net:27017/?ssl=true&replicaSet=atlas-j2j5fc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Boomi")
.then(()=>console.log('mongodb connected'))

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user => {
        console.log(user)
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/employeelist',async(req,res)=>{
    var email= req.body.title
    const existingUser = await ElistModel.findOne(email);
    if(existingUser){
        res.send('already exists')
    }else{
        ElistModel.create(req.body)
            .then(employees => res.status(201).json(employees))
            .catch(err => res.status(500).json(err));
    }  
})
app.get ('/employeelist',async(req,res)=>{
    try{
        const employees = await ElistModel.find({})
        console.log(employees)
        res.send(employees) 
    }catch(err){
        console.error('Err fetching',err)
    }
})
// app.get("/username",async(req,res)=>{
//     console.log(req.user.id)
// })
app.listen(3001, () => {
    console.log("server is running")
})