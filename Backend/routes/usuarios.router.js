const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');

router.post("/", usuarioController.create);
router.get("/",usuarioController.find);
router.get("/:id", usuarioController.findOne);
router.put("/:id", usuarioController.update);
router.delete("/:id", usuarioController.remove);


module.exports = router;
