import express from "express"
import cors from "cors";



const app= express();
app.use(cors);
app.use(express.json());


app.post("/deploy " , async (req,res)=>{
    const repourl= req.body.repourl;
    console.log(repourl);

    res.json({})
    
})










app.listen(3000, ()=>{
    console.log("app is successfully listen in 3k");
    
})