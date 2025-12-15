import express from 'express';
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const booklist = [];
 
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/server2.html");
});
//handle post 
app.post('/submit',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    booklist.push({name,email});
    res.send(`
        <h1> Form Submitted</h1>
        <h2>Name is ${name} </h2>
        <h3>email is ${email}</h3>
        <a href="/" >go back</a>
        `)
})
app.get('/all',(req,res)=>{
    res.json(booklist);
})
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})