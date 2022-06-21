/* CONTANTES PARA SELECIONAR EL CONTENEDOR Y EL INPUT DE LA ZONA DE AGREGAR ARTICULOS */
/* const btnAdd = document.getElementById("btn_add");

btnAdd.addEventListener("click",adderirArticulo()); */

function adderirArticulo(){
const creaInput1 = document.createElement("input");
const creaInput2 = document.createElement("input");
creaInput1.setAttribute("class", "col-8 form-control form-control-sm mt-3");
creaInput2.setAttribute("class", "col-1 form-control form-control-sm mt-3");
creaInput1.setAttribute("type", "text");
creaInput2.setAttribute("type", "text");
creaInput1.setAttribute("placeholder", "Nuevo Articulo")
creaInput2.value = "1";

const listArt = document.getElementById("list_art");

listArt.append(creaInput1);
listArt.append(creaInput2);

}

