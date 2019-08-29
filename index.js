var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); // Used to simplify paths || Core Node Js Module || No need to install
var ejs = require('ejs');

var app = express();

app.set('view-engine', 'ejs');



app.listen(3000, function () { // listen method with callback
    console.log('Server Started on Port 3000')
})


/* var middleWareFunc = function (req, res, next) {
    console.log('Im a MiddleWare');
    // res.send('Middleware Function Started');
    next();
}

app.use(middleWareFunc);
 */

// Body Parse MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Set static resources
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, resp) {
    // resp.json(people) /// Parsing JSON
    // resp.send('Hello Index'); // Parsing Sting
    resp.render('index.ejs', { // Rending EJS Views
        name: 'Ellis'
    })
});




console.log('Connection Established');