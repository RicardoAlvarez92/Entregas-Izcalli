/* ---------- COLOCAR EL LOCAL SEGUN EL LUGAR DE COMPRA  ---------- */


/* listas con los locales segun el lugar de compra*/
let opt_1 = new Array("-","Burger King", "Dulce Crepa", "El Globo", "Kentucky Fried Chicken", "Pastes Kikos", "Pizza Hut", "Starbucks", "Sukiya");

let opt_2 = new Array("-","Carls Jr","Casa de Toño", "Kentucky Fried Chicken", "Krispy Kreme", "Lucky Sushi", "Starbucks", "Sushi Itto");

let opt_3 = new Array("-","Tienda Local", "Tortas La Cabañita", "Taqueria el Buen Pastor", "Crepas Luces y Acción", "Walmart", "Soriana");

function cambia(){
    let lugarCompra;
    lugarCompra =document.formulario1.lugarCompra[document.formulario1.lugarCompra.selectedIndex].value;

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
    'Burger King': './img/burguer.webp',
    'Dulce Crepa' : './img/crepa.jpg',
    'El Globo': './img/globo.webp',
    'Kentucky Fried Chicken':'./img/kfc.jfif'
}
const imagenDefault = "./img/LOGO DELIVERYzhzs.webp";

const loki = imagenesMenus[valueOption] || imagenDefault;
imagenPrecio.src =`${loki}`
}

/* ---------- ZONA DE ENTREGA ---------- */
/* VARIABLE QUE ALMACENA EL INPUT A MODIFICAR */
let inputU = document.getElementById("ubi_inpu");

/* VARIABLE Y FUNCION QUE MODIFICA EL INPUT DE UBICACION AL HACER CLICK :  */

/* COFRADIA 124 */
let btnCof124 =document.getElementById("btn_cof124");

function funcionCof124(){
    inputU.value = `${btnCof124.innerHTML}`;
}

btnCof124.addEventListener("click",funcionCof124);

/* CLAUSTROS SAN MIGUEL */
let btnClaustros =document.getElementById("btn_claustros");

function funcionClaustros(){
    inputU.value = `${btnClaustros.innerHTML}`;
}
btnClaustros.addEventListener("click",funcionClaustros);

/* URBI QUINTA */
let btnUrbi =document.getElementById("btn_urbi");

function funcionUrbi(){
    inputU.value = `${btnUrbi.innerHTML}`;
}
btnUrbi.addEventListener("click",funcionUrbi);

/* JARDINES SAN MIGUEL 3 */
let btnJardines3 =document.getElementById("btn_jardines3");

function funcionJardines3(){
    inputU.value = `${btnJardines3.innerHTML}`;
}
btnJardines3.addEventListener("click",funcionJardines3);

/* COFRADIA 3 */
let btnCof3 =document.getElementById("btn_cof3");

function funcionCof3(){
    inputU.value = `${btnCof3.innerHTML}`;
}
btnCof3.addEventListener("click",funcionCof3);


/* RINCONADA CUAUTITLAN*/
let btnRinconada =document.getElementById("btn_rinconada");

function funcionRinconada(){
    inputU.value = `${btnRinconada.innerHTML}`;
}
btnRinconada.addEventListener("click",funcionRinconada);

/* EX HACIENDA SAN MIGUEL*/
let btnExHcienda =document.getElementById("btn_exHacienda");

function funcionExHcienda(){
    inputU.value = `${btnExHcienda.innerHTML}`;
}
btnExHcienda.addEventListener("click",funcionExHcienda);

/* BOSQUES 2DA*/
let btnBos2 =document.getElementById("btn_bos2");

function funcionBos2(){
    inputU.value = `${btnBos2.innerHTML}`;
}
btnBos2.addEventListener("click",funcionBos2);

/* JARDINES DE LAHACIENDA*/
let btnJarHda =document.getElementById("btn_jarHda");

function funcionJarHda(){
    inputU.value = `${btnJarHda.innerHTML}`;
}
btnJarHda.addEventListener("click",funcionJarHda);

/* REAL DE SAN JUAN*/
let btnRealSan =document.getElementById("btn_realSan");

function funcionRealSan(){
    inputU.value = `${btnRealSan.innerHTML}`;
}
btnRealSan.addEventListener("click",funcionRealSan);

/* ---------- CODIGO PARA ENVIAR WHATS ---------- */


document.querySelector("#enviar_Whats").addEventListener("click", function(){
    let nomCliente = document.querySelector("#nom_cliente").value;
    let local = slcLocales.value;
    /* variable removible se usa para darle texto al lugar de compra */
    let lita = ["--","Plaza San Miguel", "Plaza San Marcos", "Otros"];
    let url ="https://api.whatsapp.com/send?phone=525578215947&text=*Repartiflash Confirmacion de Orden*%0A%0A*Nombre:*%0A" +nomCliente+ "%0A*Zona_de Entrega:*%0A" +inputU.value+"%0A*Lugar de Compra:*%0A"+lita[lugar_compra.value]+"%0A*Local:*%0A"+local+"%0A*Articulos:*%0A"+ art1_cant.value + " " +articulo_1.value ;

    window.open(url);
});


/* cel_cliente
nom_cliente
ubicacionInput
lugar_compra
slcLocales
articulo_1
art1_cant */




