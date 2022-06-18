/* CONTANTES PARA SELECIONAR EL CONTENEDOR Y EL INPUT DE LA ZONA DE AGREGAR ARTICULOS */
const contArts = document.getElementById("cont_arts");
const crearInput = document.createElement("input");
/* CONSTANTES QUE COLOCA LA CLASES Y ATRIBUTOS AL INPUT QUE SE AGREGA */
const inputClass1 = crearInput.class = "col-8 form-control form-control-sm mt-3";
const inputClass2 = crearInput.clas = " col-1 form-control form-control-sm mt-3";
const inputType = crearInput.type = "text";
let inputPlace1 = crearInput.placeholder = `Articulo 1`;
const inputPlace2 = crearInput.placeholder = "1";

contArts.appendChild(crearInput);
