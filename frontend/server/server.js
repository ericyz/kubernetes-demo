const express = require('express')
const path = require('path')
const axios = require('axios')
const bodyParser = require("body-parser");
const useragent = require("express-useragent");
const compression = require( "compression");
const cookieParser = require( "cookie-parser");
const port = process.env.PORT || 3000;
const backendHost = process.env.BACKEND_HOST || 'http://localhost:5000'
const app = express()

app.use(useragent.express());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/home/', (req, res)=>{
    axios.get(`${backendHost}/api/home`).then(response=>{
        res.status(200).json(response.data)
    }).catch(err=>{
        res.send(err)
    })
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../index.html'));
});
app.use(express.static('dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))