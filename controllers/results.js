const express = require('express');

//RESTFUL => GET, POST, PUT, PATCH y DELETE
//MODELO = (Una estructura de datos que representa una entidad del mundo real)

function suma(req, res, next){
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.send(`La suma es = ${n1 + n2}`);
}

function multi(req, res, next){
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    res.send(`La multiplicacion es ${n1 * n2}`);
}

function dividir(req, res, next){
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    res.send(`La division es ${n1 / n2}`);
}

function potencia(req, res, next){
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    res.send(`La potencias es ${Math.pow(n1,n2)}`);
}

function resta(req, res, next){
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.send(`La resta es ${n1 - n2}`);
}

module.exports = {
    suma, multi, dividir, potencia, resta
}