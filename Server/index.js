const express =  require('express')
const cors = require('cors')
const {MongoClient}=require('mongodb')
const app=express()

app.use(cors())
app.use(express.json())
const client =new MongoClient('mongodb+srv://admin:admin@cluster0.e2ojb9t.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db =client.db('counselling1')
const col = db.collection('register')
//col.insertOne({'student':"123"})


app.post('/register',(req,res)=>{
col.insertOne(req.body)
console.log(req.body)
res.send('!Inserted successfully')
})

app.get('/retrieve',async (req,res)=>{
     const result= await col.find().toArray()
     console.log(result)
     res.send(result)
})

app.get('/', (req,res)=>{
    res.send('<h1>hello world<h1/>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>this is about<h1/>')
})
app.listen('8080',()=>{console.log('server is running')})
