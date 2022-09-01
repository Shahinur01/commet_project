const express=require('express')
const app = express()
const homeRoutes=require('./routes/homeRoutes')
// const expressLayouts = require('express-ejs-layouts');

// server port config
const dotenv = require('dotenv')
dotenv.config();
const port=process.env.SERVER_PORT || 3000;
const localhost=process.env.localhost

// public folder
app.use(express.static('public'));

// data manage
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(expressLayouts);

app.use(homeRoutes)

// ejs init
app.set("view engine" , "ejs");

// get nothing url
app.use((req,res, next)=>{
    res.status(404).send('<h1>Server is incorrect url, please try again new URL</h1>')
})

// listening server
app.listen(port,(req, res) => {
    console.log(`server is running at ${localhost}:${port}`);
})
