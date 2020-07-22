var path = require('path')
const express = require('express')
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express()
const dotenv = require('dotenv');
dotenv.config();
var fetch = require("node-fetch");

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/geo',async function(req,res){
    let city=req.body.myCity
    let days=req.body.left
    // console.log(city+","+days)
    let resp=await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${process.env.GEO_USERNAME}`).
    then(response=>{return response.json();}).
    then(myJson=>{res.send(myJson)}).
    catch(error=>{console.log('stoooop',error)})
})