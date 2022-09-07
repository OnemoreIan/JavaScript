//funciones
var ejemplo_cabeza = document.getElementsByClassName('ejemplo_cabeza');
function bucles(){
  var vista = 10;

  for (i = 1; i <= vista; i++) {
    document.write('oh no '+i+'<br>');
  }
}
ejemplo_cabeza.innerHTML += bucles();
/*
function suma(num1,num2) {
  
    let dato1 = parseFloat(dat1);
  let dato2 = parseFloat(dat2);
  

  let res;
  alert(res=num1+num2)
  return
}*/


let suma = (num1,num2) => alert(num1+num2)





function sumatoria(num1,num2) {
  var num1 = parseFloat(document.getElementById('num1').value) ;
  var num2 = parseFloat(document.getElementById('num2').value);
  var res;
  return res = num1+num2;
}
click_boton = document.getElementById('bot_suma');//.onclick=suma(num1,num2);
click_boton.onclick=suma(num1,num2);
/*

document.getElementById('boton').onclick=suma;
funcion sumar(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var respuesta = parseInt(num1)+ parseInt(num2);
  alert('la suma es: '+respuesta);
}

*/

