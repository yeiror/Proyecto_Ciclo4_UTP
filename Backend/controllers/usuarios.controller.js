const Usuario = require("../models/usuarios.model");

let response ={
    msg:'',
    exito:false,
   
}

exports.create = function(req,res){
    let usuario = new Usuario({
        
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
            res.status(400).json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se guardo exitosamente"
        res.json(response)
    });
}

exports.find = function(req, res){
    Usuario.find(function(err,usuario){
        res.json(usuario);
    });
}

exports.findOne = function(req,res){
    Usuario.findOne(
            {_id:req.params.id},
            function(err,usuarios){
                res.json(usuarios);
            }
    
    );
}

exports.update = function(req,res){
    let usuario = {
        usuario: req.body.usuario,
        correo: req.body.correo,
        password: req.body.password,
        telefono: req.body.telefono
    }
    Usuario.findByIdAndUpdate(
        req.params.id,
        {$set:usuario},function(err){
            if(err){
                console.err(err),
                response.exito = false,
                response.msg = "Error al cambiar datos del usuario"
                res.json(response)
                return;
            }
            response.exito=true,
            response.msg = "Los datos del usuario se han actualizado"
            res.json(response)          
        })
}

exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id:req.params.id},
        function(err){
            if(err){
                console.error(err),
                response.exito=false,
                response.msg = "Error al eliminar usuario"
                res.json(response)
                return;
            }
            response.exito=true,
            response.msg="El usuario ha sido eliminado"
            res.json(response)
        }
        )
}