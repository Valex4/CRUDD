module.exports ={
    /* aqui van los metodos para acceder a la tabla clientes*/
    obtener:function(conexion,funcion){
      conexion.query("SELECT * FROM clientes",funcion);
    }
}