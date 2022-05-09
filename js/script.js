/*
    1.Le pido al usuario que escriba su nombre 
    
    2.Muestre un menu con opciones:
        2.1.Calcular promedio de materias
            2.1.1.Preguntar al usuario la cantidad de materias que tiene
            2.1.2.Preguntar el nombre de la materia y sus tres valores trimestrales
            2.1.3.Hacer la operación para sacar el promedio e imprimir el resultado en un Alert
        2.2.Dar por finalizado las opciones


        
    */

let nombre = prompt("Ingrese su nombre");
NOMBRE = nombre.toUpperCase();

let menu = mostrarMenu();

if (menu != 2) {
  preguntarMaterias(menu);
} else {
  alert("GRACIAS " + NOMBRE + " VUELVA PRONTO");
}
function mostrarMenu() {
  return prompt(
    "Seleccione alguna opción: 1. CALCULAR EL PROMEDIO DE MATERIAS 2. FIN"
  );
}
function preguntarMaterias(menu) {
  if (menu == 1) {
    let nMaterias = Number(prompt("Ingrese la cantidad de materias"));
    pedirMaterias(nMaterias);
  }
}

function pedirMaterias(nMaterias) {
  for (i = 1; i <= nMaterias; i++) {
    ingresoDeNombreMateria();
  }
}
function ingresoDeNombreMateria() {
  let materia = prompt("Ingrese el nombre de la materia N°" + i);
  let valor1 = Number(prompt("Ingrese el primer valor trimestral"));
  let valor2 = Number(prompt("Ingrese el segundo valor trimestral"));
  let valor3 = Number(prompt("Ingrese el Tercer valor trimestral"));
  let promedio = (valor1 + valor2 + valor3) / 3;
  if (promedio < 7) {
    alert(
      nombre +
        " , usted ha desaprobado la materia " +
        materia +
        " con un promedio de " +
        promedio
    );
  } else {
    alert(
      nombre +
        " , usted ha aprobado la materia " +
        materia +
        " con un promedio de " +
        promedio
    );
  }
}
