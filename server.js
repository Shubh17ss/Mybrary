// if(process.env.NODE_ENV!=='production'){
//     require('dotenv').parse()
// }
const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts')

const indexRouter=require('./routes/index');

app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/mybrary").then(()=>{
    console.log("Connected to mongodb database");
}).catch((err)=>{
    console.log(err)
})

app.use('/',indexRouter)

app.listen(process.env.PORT || 3000)