const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario:{type:String, required:true,max:60},
    correo:{type: String, required:true, max:70},
    password:{type:String, required: true, max:180},
    telefono:{type:String, required:false, max:15}
});

module.exports = mongoose.model("usuarios", UsuarioSchema);