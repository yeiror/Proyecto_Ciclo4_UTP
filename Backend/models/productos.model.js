const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    nombre:{type:String, required:true,max:200},
    marca:{type: String, required:true, max:60},
    precio:{type: Number, required: true},
    talla:{type: Array, required: false},
    descripcion:{type:String, required:false, max:15}
});

module.exports = mongoose.model("productos", ProductoSchema);