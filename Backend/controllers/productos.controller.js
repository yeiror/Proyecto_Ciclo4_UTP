const Producto = require("../models/productos.model");

let response ={
    msg:'',
    exito:false,
   
}

exports.create = function(req,res){
    let producto = new Producto({
        
        usuario: req.body.usuario,
        correo: req.body.correo,
        password: req.body.password,
        telefono: req.body.telefono
    });

    usuario.save(function(err){
        if(err){
            console.log = false,
            response.exito=false,
            response.msg = "Error al guardar el empleado",
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se guardo exitosamente"
        res.json(response)
    });

}