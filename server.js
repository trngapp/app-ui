const Express =require("express");
const app =new Express();

const port = 4000;

app.get("/",(req,res)=>{
    console.log("server started!!");
    res.send("server started");
})


app.listen(port)