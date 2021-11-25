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
            res.status(201).json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se guardó exitosamente "
        res.json(response)
    });
}

exports.find = function(req, res){
    Producto.find(function(err,producto){
        res.json(producto);
    });
}

exports.findOne = function(req,res){
    Producto.findOne(
        {_id:req.params.id},
        function(err,producto){
            res.json(producto);
        }
    );
}

exports.update = function(req,res){
    let producto = new Producto({

        talla: JSON.stringify(req.body.talla),
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });
    Producto.findByIdAndUpdate(
        req.params.id,
        {$set:producto},function(err){
            if(err){
                console.err(err),
                response.exito = false,
                response.msg = "Error al cambiar datos del producto"
                res.json(response)
                return;
            }
            response.exito=true,
            response.msg = "Los datos del producto se han actualizado"
            res.json(response)          
        })
}

exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id:req.params.id},
        function(err){
            if(err){
                console.error(err),
                response.exito=false,
                response.msg = "Error al eliminar producto"
                res.status(400).json(response)
                return;
            }
            response.exito=true,
            response.msg="El producto ha sido eliminado"
            res.json(response)
        }
        )
}