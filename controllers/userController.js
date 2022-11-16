var conexion=require("../config/conexion");
let user=require("../model/user");

module.exports={

    index:function(req,res){
      
      res.render('users/index', { title: 'CleanSkin'});

    },
    comprador:function(req, res){
      user.obtener(conexion,(err,datos)=>{
        console.log(datos);
        res.render('users/comprador');
      });
     
    },
    vendedor:function(req, res){

        user.obtenerVendedor(conexion,(err,datos)=>{
            console.log("Vendedores: ");
            console.log(datos);
            res.render('users/vendedor');
        });
    },logincomprador:function(req, res){
      /*user.obtener(conexion,(err,datos)=>{
        console.log("Compradores: ")
        console.log(datos);
        
      });*/
      res.render("users/loginComprador");
     
    },
    loginVendedor:function(req, res){
      //console.log("inicio de Sesion datos: ");
      //console.log(req.body);
      res.render("users/loginVendedor");
    },
    registroComprador:function(req, res){

      const datos = JSON.parse(JSON.stringify(req.body));
      console.log("contraseña registro: ");
      console.log(datos.contra1);
      user.validarRegistroComprador(conexion,datos,(err, userdata)=>{
        if(userdata.length > 0){
          //console.log(" HAY UNA CUENTA CON EL CORREO INGRESADO");
          res.render('users/comprador', { cadena: '¡¡ 𝘾𝙤𝙧𝙧𝙚𝙤 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚 !!'});
        }else{
          console.log("datos ingresados a BD: ");
          user.insertarComprador(conexion,datos,(err, datos) =>{
            res.redirect('/products/catalogo');
         
      });
        }
      });
    },validarComprador:function(req,res){
      const data = JSON.parse(JSON.stringify(req.body));
      console.log(data);
     
      user.validarRegistroComprador(conexion,data,(err, registro)=>{

        const prueba = JSON.parse(JSON.stringify(registro));
        console.log(registro.length)
        /*console.log("impresion de prueba: ")
        console.log(prueba);
        console.log("prueba: "+prueba[0].contrasena);
        console.log("data: "+data.contra1);*/

        if(registro.length > 0){ //esto es para evaluar el correo
          (data.contra1 == prueba[0].contrasena) ? res.redirect('/products/catalogo') : res.render('users/loginComprador', { cadena: '¡¡ Contraseña incorrecta !!'});
        }else{
          console.log("puta aremy");
          res.render('users/loginComprador', { cadena: '¡¡ Usuario no encontrado !!'});
        }
      });
    },
    registroVendedor:function(req,res){
      const datos = JSON.parse(JSON.stringify(req.body));
      console.log("Vendedores registro: ");
      console.log(datos);
      user.validarRegistroVendedor(conexion,datos,(err, userdata)=>{
        if(userdata.length > 0){
          //console.log(" HAY UNA CUENTA CON EL CORREO INGRESADO");
          res.render('users/vendedor', { cadena: '¡¡ 𝘾𝙤𝙧𝙧𝙚𝙤 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚 !!'});
        }else{
          console.log("datos ingresados a BD: ");
          user.insertarVendedor(conexion,datos,(err, datos) =>{
            res.redirect('/products/catalogo');
         
      });
        }
      });
  },
  validarVendedor:function(req,res){
    const data = JSON.parse(JSON.stringify(req.body));
    console.log(data);
   
    user.validarRegistroVendedor(conexion,data,(err, registro)=>{
      console.log(registro.length);
      const prueba = JSON.parse(JSON.stringify(registro));
      console.log(prueba);
      if(registro.length > 0){ //esto es para evaluar el correo
        (data.contraseña == prueba[0].contrasena) ? res.redirect('/products/catalogo') : res.render('users/loginVendedor', { cadena: '¡¡ Contraseña incorrecta !!'});
      }else{
        console.log("Usuario no encontrado");
        res.render('users/loginVendedor', { cadena: '¡¡ Usuario no encontrado !!'});
      }
    });
  }

}