/* OBTIENE EL INNER HTML DEL BVOTON PULSADO EN ZONA DE ENTREGA */

let inputU = document.getElementById("ubi_inpu");
function coloZonaEntrega(btnClickeado){
    valorBtnClickeado = btnClickeado.innerHTML;
    inputU.value = `${valorBtnClickeado}`;
} 

/* ---------- COLOCAR EL LOCAL SEGUN EL LUGAR DE COMPRA  ---------- */

/* listas con los locales segun el lugar de compra*/
let opt_Plaza_San_Miguel = new Array("-","Burger King", "Dulce Crepa", "El Globo", "Kentucky Fried Chicken", "Pastes Kikos", "Pizza Hut", "Starbucks", "Sukiya");

let opt_Plaza_San_Marcos = new Array("-","Carls Jr","Casa de Toño", "Kentucky Fried Chicken", "Krispy Kreme", "Lucky Sushi", "Starbucks", "Sushi Itto");

let opt_Otros = new Array("-","Tienda Local", "Tortas La Cabañita", "Taqueria el Buen Pastor", "Crepas Luces y Acción", "Walmart", "Soriana");

/* let prueba = document.formulario1.lugarCompra[document.formulario1.lugarCompra.selectedIndex].innerHTML;
console.log(prueba);
 */
function cambia(){

    let lugarCompra =document.formulario1.lugarCompra[document.formulario1.lugarCompra.selectedIndex].value;

    if(lugarCompra != 0){
        mis_opts= eval("opt_"+ lugarCompra);
        num_opts=mis_opts.length;
        document.formulario1.locales.length = num_opts;
        

        for(i=0; i < num_opts; i++){
            document.formulario1.locales.options[i].value=mis_opts[i];
            document.formulario1.locales.options[i].text=mis_opts[i];
        }
        }else{
            document.formulario1.locales.length= 1;
            document.formulario1.locales.options[0].value="-";
            document.formulario1.locales.options[0].text="-";
    }
    document.formulario1.locales.options[0].selected = true;

}

/* CAMBIA LA IMAGEN DE LOS MENUS SEGUN EL RESTAURANTE SELECIONADO EN EL SELECT */
function cambiarImagen(){
let optionValue= document.getElementById("slcLocales");
let valueOption= optionValue.value;
let imagenPrecio= document.getElementById("imagen");

/* OBJETO CON LA DIRECCION DE CADA IMAGEN SEGUN EL RESTAURANTE */
let imagenesMenus = {
    'Burger King': './img/menus/burguer_1.jpeg',
    'Dulce Crepa' : './img/menus/dulce_crepa.jpg',
    'El Globo': './img/globo.webp',
    'Kentucky Fried Chicken':'./img/menus/kfc_2.jpeg',
    'Pastes Kikos':'./img/menus/pastes_k.jpeg',
    'Starbucks':'./img/menus/starbucks.jpeg',
    'Pizza Hut':'./img/menus/pizza hut.png',
    'Sukiya':'./img/menus/sikiya.jpg'
}
const imagenDefault = "./img/LOGO DELIVERYzhzs.webp";

const loki = imagenesMenus[valueOption] || imagenDefault;
imagenPrecio.src =`${loki}`
}

 /*CODIGO PARA AGREGAR ARTICULOS EN UNA LISTA LOS VALORES CREAN UN NUEVO OBJETO Y */

function agregarArticulo(){
    function Articulo(nombreArt, cantidadArt){
        this.nombreArt = nombreArt;
        this.cantidadArt = cantidadArt;
    }
    let nombreArticulo = document.getElementById("art_input").value;
    let cantidadArticulo = document.getElementById("cant_input").value; 
    /* VARIABLE GLOBAL QUE CREA NUEVO OBJETO */
    nuevoArticulo = new Articulo(nombreArticulo, cantidadArticulo);
    creaArrayList(); 
}

    listaArticulos = [];
function creaArrayList(){
   listaArticulos.push(nuevoArticulo);
    document.getElementById("tabla_art").innerHTML += '<tbody><td>'+nuevoArticulo.nombreArt+'</td> <td>'+nuevoArticulo.cantidadArt+'</td></tbody>';
};



let btnEnviarDatos = document.getElementById("enviar_whats");

/* ESTA FUNCION RECORRE LA LISTA DE ARTICULOS PARA COLOCARLOS EN UN ARRAY PARA PODER CONCATENARLOS AL MENSAJE FINAL */
btnEnviarDatos.addEventListener("click",nuevaListaArt); 
nuevaListaArticulos = [];

function nuevaListaArt(){
    i=0;
    while(i < listaArticulos.length){
        nuevaLista = `%0A${listaArticulos[i].nombreArt}--${listaArticulos[i].cantidadArt}%0A`;
        console.log(nuevaLista);
        nuevaListaArticulos.push(nuevaLista);
        i++;
    }
    enviarDatosWhats();
        };

/* ---------- FUNCION QUE CONSTRUYE EL MENSAJE PARA ENVIARLO CON LA AYUDA DE LA API DE WHATSSAP ---------- */
function enviarDatosWhats(){

    let nomCliente = document.getElementById("nom_cliente").value;
    let local = slcLocales.value;
    let lCom = document.formulario1.lugarCompra[document.formulario1.lugarCompra.selectedIndex].innerHTML;

    let url ="https://api.whatsapp.com/send?phone=525578215947&text=*Repartiflash Confirmacion de Orden*%0A%0A*Nombre:*%0A" +nomCliente+ "%0A*Zonade Entrega:*%0A" +inputU.value+"%0A*Lugar de Compra:*%0A"+lCom+"%0A*Local:*%0A"+local+"%0A*Articulos:*%0A"+ nuevaListaArticulos;

    window.open(url);
};



