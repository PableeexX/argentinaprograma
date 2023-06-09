// let nombres = ["PabLo","CesAr", "LilianA", "sILvINA","mICAELa", "cEsaritO"];
//  let nombres_copia = nombres.slice(0,nombres.length);
// console.log(nombres);
// nombres = nombres.toUpperCase;
// console.log(nombres);
// nombres_copia.forEach ((elemento, indice, array) => {
//     array[indice] = elemento.toLowerCase ();
// });
// console.log(nombres);
// console.log(nombres_copia);
// let a = 5;
// let b = "hola";
// console.log(!isNaN(a));
// console.log(!isNaN(b));

// let numeros = [1, 2, 3, 4];
// function suma (acumulador, valor){
//    return acumulador = acumulador + valor;
// }
// let numero_proc = numeros.reduce(suma, 0);
// console.log(numero_proc);

// console.log(a);
// a.reduce
// let numeros =["654asda65s4da654sad"];
// numeros.forEach ( elemento => console.log (elemento));
// .map();
function isANumber(c){
    return !isNaN(Number(c))
}
function logicAnd(acumulador,valor){
    acumulador = acumulador && valor;

}
let caracteres = "12adas315sadasd6";
let caracteresToArray = caracteres.split("");
let isNumber = caracteresToArray.map(isANumber);
console.log(caracteresToArray);
console.log (isNumber);




