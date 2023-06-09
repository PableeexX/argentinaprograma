let entrada = prompt ("Ingrese Su Nombre");
let Nombre   = document.getElementById ("Tu Nombre");
Nombre.innerHTML = entrada.toUpperCase ();

entrada = prompt ("Ingrese Su Apellido");
let  Apellido   = document.getElementById ("Tu Apellido");
Apellido.innerHTML = entrada.toUpperCase ();

entrada = prompt ("Ingrese Su DNI");
let dni_entrada = entrada.split(".");
let dni_ok = "";
for (let i = 0; i < dni_entrada.length; i++){
    dni_ok = dni_ok + dni_entrada[i];
}
let dni  = document.getElementById ("Dni");
dni.innerHTML = dni_ok;


entrada = prompt ("Tu Equipo");
let Equipo  = document.getElementById ("Tu Equipo");
Equipo.innerHTML = entrada.toUpperCase ();


entrada = prompt ("Apodo De Tu Equipo");
let Alias = document.getElementById ("Tu Alias");
Alias.innerHTML = entrada.toUpperCase ();


let Contrasenia = document.getElementById ("Contrasenia");
Contrasenia.innerHTML = ((Nombre.innerHTML.charAt (0)).toUpperCase ()) + ( Apellido.innerHTML.toLocaleLowerCase ()) + (dni.innerHTML.slice (-3));

let Usuario = document.getElementById("Usuario");
Usuario.innerHTML = (Nombre.innerHTML)+(dni.innerHTML.slice (-3));





 
