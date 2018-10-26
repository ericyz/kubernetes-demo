const express = require('express')
const path = require('path')
const axios = require('axios')
const bodyParser = require("body-parser");
const useragent = require("express-useragent");
const compression = require( "compression");
const cookieParser = require( "cookie-parser");
const port = 3000;
const backendHost = process.env.BACKEND_ENDPOINT || 'http://localhost:5000'
const app = express()

console.log(backendHost)

app.use(useragent.express());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/home/', (req, res)=>{
    axios.get(`${backendHost}/api/home`).then(response=>{
        console.log(`${backendHost}/api/home`)
        console.log(response.data)
        res.status(200).json(response.data)
    }).catch(err=>{
        console.log(err)
        res.send(err)
    })
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../index.html'));
});
app.use(express.static('dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))