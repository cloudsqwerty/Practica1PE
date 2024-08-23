//Creamos un objeto para obtener la fecha actual 
let fechaActual = new Date();

//Obtener el dia de la semana 
let diaSemana = fechaActual.getDay();

//Creamos un array para mapear los numeros de dias a los nombres correspondientes
let nombreDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

//Obtener el nombre del dia correspondiente al numero obtenido 
let nombreD = nombreDias[diaSemana];

//Imprimir el nombre del dia en la consola 
console.log(`Hoy es: ${nombreD}`);
