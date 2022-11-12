module.exports ={
    /* aqui van los metodos para acceder a la tabla productos*/
    obtener:function(conexion,funcion){
      conexion.query("SELECT * FROM productoss",funcion);
    },
    insertar:function(conexion,datos,archivos,funcion){
      conexion.query("INSERT INTO productoss (nombre,categoria,precio,stock,descripcion,imagen) VALUES (?,?,?,?,?,?) ",[datos.nombre,datos.categoria,datos.precio,datos.stock,datos.descripcion,archivos.filename],funcion);
    },
    mostrarCatalogo(conexion,funcion){
      conexion.query("SELECT * FROM productoss",funcion);
    },
    retornarDatosID:function(conexion,id,funcion){
      conexion.query("SELECT * FROM productoss where id=?",[id],funcion);
    },
    borrar:function(conexion,id,funcion){
      conexion.query("DELETE FROM productoss WHERE id=?",[id],funcion);
    },
    actualizar:function(conexion,datos,funcion){
      conexion.query("UPDATE productoss SET nombre=?,categoria=?,precio=?,stock=?,descripcion=? WHERE id=?",[datos.nombre,datos.categoria,datos.precio,datos.stock,datos.descripcion,datos.id],funcion);
    }
}