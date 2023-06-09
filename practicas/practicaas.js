entrada = window.prompt("Ingrese su Nombre:");
let nombre_entrada = entrada.split(".");
let nombre_ok = "";

entrada = window.prompt("Ingrese su Apellido:");
let apellido_entrada = entrada.split(".");
let apellido_ok = "";
entrada = window.prompt("Ingrese su DNI:");
let dni_entrada = entrada.split(".");
let dni_ok = "";

for(let i = 0; i < nombre_entrada.length; i++){
    nombre_ok = nombre_ok + nombre_entrada[i];
  }
  for(let i = 0; i < apellido_entrada.length; i++){
    apellido_ok = apellido_ok + apellido_entrada[i];
  }
  for(let i = 0; i < dni_entrada.length; i++){
    dni_ok = dni_ok + dni_entrada[i];
  }
 let nombre = document.getElementById("nombre");
 nombre.innerHTML = nombre_ok;

   
let apellido = document.getElementById("apellido");
apellido.innerHTML = apellido_ok;

let dni = document.getElementById("dni");
dni.innerHTML = dni_ok;


