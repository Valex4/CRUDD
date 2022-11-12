var conexion=require("../config/conexion");
let product=require("../model/product")
module.exports={

    index:function(req,res){

      product.obtener(conexion,(err,datos)=>{
        console.log(datos)
        res.render('products/index', { title: 'CleanSkin', products:datos });
      });

    },
    crear:function(req,res){
     res.render('products/crear');
    },
    guardar:function(req,res){
      console.log(req.body);
      console.log(req.file.filename);

      product.insertar(conexion,req.body,req.file,(err,datos)=>{
        res.redirect('/products');
        
      });
    },
    catalogo:function(req,res){
      /*res.render('products/catalogo');*/

      product.mostrarCatalogo(conexion,(err,datos)=>{
        res.render('products/catalogo', {productos:datos });
      });
    },
    seguimiento:function(req,res){
      res.render('products/seguimiento');
    },
    seguimientoproductos:function(req,res){
      res.render('products/seguimientoProducto');
    },
    eliminar:function(req,res){
      console.log("resepcion de datos");
      console.log(req.params.id);
      /*product.retornarDatosID(conexion,req.params.id,function(){
        var nombreImagen="public/images"+(registros[0].imagen);
        res.send(nombreImagen);
      });*/
    }
    
}