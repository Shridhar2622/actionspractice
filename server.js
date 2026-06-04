const express=require("express")

const app=express();

app.get("/",(req,res)=>{
    res.send("hiee")
})


app.listen(3000);