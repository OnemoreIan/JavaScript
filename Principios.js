//imprimir
alert(nomvariable); //crear alerta del navegador
console.log(nomvariable);//imprime en la consola de la pagina


//variables
//si no se utiliza <var> al declarar, la variable se toma como variable global
//<let> otro indicador de variable utilizado paa variables de bloque o que se ejecutan en un solo bloque de codigo
//para crear una variable global de un bloque se omite todo antes del nombre de la variable
var nomvariable = 'Julian';
var nomvariablenum = 50;
var nomvariableflotante = 500.50;
var nomvariablebooleano = true;
var coleccion = ['hi','pepe',50,21];
var objeto = {color:'blanco',forma:'rectangulo'};
var indefinido;
var nulo=null;
var NAN='hi popa';//este es mas un valor no valido
document.write(NAN*2);

//constantes
const constantes = 'inamobible';
console.log(constantes);

//salto de linea          <br>


//insertar datos en el documento, no recomendado
document.write(nomvariable,nomvariableflotante,nomvariablebooleano,nomvariablenum);//la info es añadida hsta arriba

//insertar con ubicacion especifica
var eti_position = document.getElementById("position");//ubicar el identificador del documento y guardarlo en una variable
var eti_position2 = document.getElementsByClassName("position2");
eti_position.innerHTML = nomvariable+nomvariableflotante+nomvariablebooleano+nomvariablenum;//usar la funcion .innerHTML y despues insertar datos
//opcion 2
//para esta opcion es necesario utilizar el acento invertido, este <``>
eti_position.innerHTML +=/*<-- aqui*/ `<h3>Usando esta funcion puedes añadir variables como ${nomvariablebooleano}</h3>
<p>Dentro de un texto o parrafo, ${nomvariable} tienes que usar el signo <$> + <{}> para guardar las variables</p>
<p>la variable se encuentra dentro de los parentesis ${nomvariablenum}  ${nomvariableflotante}</p>
`
//nota de la opcion2
//al usar el .innnerHTML es necesaro no usar el = ya que borra todo el contenido de esa etiqueta, es mejor usar += ejemplo arriba**

//condicionales
if (nomvariablenum == 50) {
    eti_position.innerHTML += `Shit es 50`
}else if (nomvariable > 50) {
    eti_position.innerHTML += 'Su madre, es mas de 50'
}else {
    eti_position.innerHTML += `Shit'n es 50`
}


//bucles
for(var i=0;i<10;i++){
    eti_position.innerHTML+=i
}
while (nomvariablebooleano==true) {
  eti_position.innerHTML+='°_°';
  break
}

//funciones
function ejemplo_funcion() {
    eti_position.innerHTML += '\nHI moder fuker'
    return
}
ejemplo_funcion()


//imprimir todos los valoresde la lista
for (i= 0;i < coleccion.length; i++) {

    document.write(coleccion[i]);
}


//ingresar datos
//usando la palabra prompt
/*ubicacion de ejemplo en el boton
var nombre = prompt('Quien eres? ');
alert('bienvenido '+nombre)
*/


//funciones
//funciones estandar
var eti_position3 = document.getElementsByClassName("position3");
function bucles(){
  let vista = 10;

  for (i = 1; i <= vista; i++) {
    document.write('oh no '+i+'<br>');
  }
}
//funciones de flecha
const bucle = (/*parametros*/) => {//es igual a la funcion estandar
  let vista = 10;
//solo evitamos el llamdao funciones
  for (i = 1; i <= vista; i++) {
    document.write('oh no '+i+'<br>');
  }
}//ambas requieren de usar return si se necesita
eti_position3.innerHTML += bucles();//llamada a la funcion usando la variable de identificador
eti_position3.innerHTML += bucle();