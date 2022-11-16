module.exports ={
    /* aqui van los metodos para acceder a la tabla clientes*/
    obtener:function(conexion,funcion){
      conexion.query("SELECT * FROM clientes",funcion);
    },
    obtenerVendedor:function(conexion,funcion){
        conexion.query("SELECT * FROM vendedor",funcion); 
    },
    insertarComprador:function(conexion,datos,funcion){
      conexion.query("INSERT INTO clientes (nombre,ap_paterno,ap_materno,correo,contrasena,direccion) VALUES (?,?,?,?,?,?) ",[datos.Usuario,datos.ap_paterno,datos.ap_materno,datos.correo1,datos.contra1,datos.direccion],funcion);
    },
    validarRegistroComprador:function(conexion,datos,funcion){
      conexion.query("SELECT * FROM clientes WHERE correo = ?",[datos.correo1],funcion);
    },
    insertarVendedor:function(conexion,datos,funcion){
      conexion.query("INSERT INTO vendedor (nombre,ap_paterno,ap_materno,correo,contrasena) VALUES (?,?,?,?,?) ",[datos.nombreUsuario,datos.ap_paterno,datos.ap_materno,datos.correo,datos.contraseña],funcion);
    },
    validarRegistroVendedor:function(conexion,datos,funcion){
      conexion.query("SELECT * FROM vendedor WHERE correo = ?",[datos.correo],funcion);
    }
}