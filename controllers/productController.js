var conexion=require("../config/conexion");
let product=require("../model/product");
let borrar= require("fs");
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
      product.retornarDatosID(conexion,req.params.id,function(err,registros){
        var nombreImagen="public/images/"+(registros[0].imagen);

        

        if(borrar.existsSync(nombreImagen)){
          borrar.unlinkSync(nombreImagen);
        }
        product.borrar(conexion,req.params.id,function(err){

          res.redirect('/products');
        })

      });
    },
    editar:function(req,res){
      product.retornarDatosID(conexion,req.params.id,function(err,registros){
        console.log(registros[0]);
        res.render('products/editar', {product:registros[0]});
      });
      
    },
    actualizar:function(req,res){
      console.log(req.body.nombre);

      if(req.file){
        if(req.file.filename){

            product.retornarDatosID(conexion,req.body.id,function(err,registros){
              var nombreImagen="public/images/"+(registros[0].imagen);
              if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
              }

              product.actualizarArchivo(conexion,req.body,req.file,function(err){
                
              });
            
    
            });
        }

      }

      if(req.body.nombre){
      product.actualizar(conexion,req.body,function (err) { });
    }

    res.redirect('/products');
      
    }
    
}