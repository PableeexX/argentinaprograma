let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoDeCita = [cita.length] ;
console.log("El tamaño de la cita es: " + [tamañoDeCita]);
let indide = cita.indexOf("tigres comen trigo");
console.log("El indice del substring es: " + [indide]);
let citaSubstring = cita.split(" ");
let citaRevisada = citaSubstring[0] + " " + citaSubstring [1] + " " + citaSubstring [2]+ " " + citaSubstring[3] +" " + citaSubstring[4]+"."; 
console.log(citaRevisada);