//scope
//es el alcanze de las variables

/*Explicacion
este se refiere al uso de las variables dentro de la ejecucion,
si declaras una variable fuera de una funcion, la misma puede 
acceder sin problemas

pero si esta declarada dentro de la funcion y no se retorna,
no podra ser utilizada

2 tipos e scope//

De funcion
accesible dentro de la funcion pero no fuera de la misma
declaradas con <var>

De bloque
accesibles dentro del bloque que use <{}> como: 
if,else o usando bucles, variables 
declaradas con <let> y <const>

*/
let nombre = 'Manuel';

const saludar = () => {
    let apellido = 'muños'
    console.log("nombre: ${nombre} y apellido ${apellido}")
}
saludar();

//alcanze limitado de centro o nucleo a arriba