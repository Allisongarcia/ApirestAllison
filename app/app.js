const express = require('express');
const rutasVinos=require('./rutas/rutasVino');
const app = express();
/*Router.get('/', function(req,res){
    res.render('modelos/ModelosVinos')
})

app.get('/', function(req,res){
    res.send()
})*/

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVinos);


module.exports = app;