var express = require('express');
var router = express.Router();

const userController=require("../controllers/userController");

router.get('/',userController.index);
router.get('/comprador',userController.comprador);
router.get('/vendedor',userController.vendedor);
module.exports = router;
