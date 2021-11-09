const Producto = require("../models/productos.model");

let response ={
    msg:'',
    exito:false,
   
}

exports.create = function(req,res){
    let producto = new Producto({

        talla: JSON.stringify(req.body.talla),
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });

    producto.save(function(err){
        if(err){
            console.log = false,
            response.exito=false,
            response.msg = "Error al guardar producto",
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se guardó exitosamente "
        res.json(response)
    });

}