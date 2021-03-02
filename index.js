const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

const PORT=process.env.PORT||5000;//for heroku to mention a particular port to listien the response
app.listen(PORT);
