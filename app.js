
const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
var path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "public/reservation.html"));
});



app.post('/', function (req, res) {
    var name = req.body.name;
    var prenom = req.body.prenom;
    var email = req.body.email;
    var telphone = req.body.telphone;
    var version = req.body.version;


    fs.readFile('users.json', 'utf-8', function (err, data) {
        if (err) throw err

        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects.push({
            name: name,
            prenom: prenom,
            email: email,
            telphone : telphone,
            version : version,
        });

        console.log(arrayOfObjects);

    })

})

app.listen('3030', function () {
    console.log("Hello");

})  
