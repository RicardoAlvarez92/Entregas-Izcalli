/* listas con los locales segun el lugar de compra*/
var opt_1 = new Array("-","Burger King", "Dulce Crepa", "El Globo", "Kentucky Fried Chicken", "Pastes Kikos", "Pizza Hut", "Starbucks", "Sukiya");

var opt_2 = new Array("-","Carls Jr","Casa de Toño", "Kentucky Fried Chicken", "Krispy Kreme", "Lucky Sushi", "Starbucks", "Sushi Itto");

var opt_3 = new Array("-","Tienda Local", "Tortas La Cabañita", "Taqueria el Buen Pastor", "Crepas Luces y Acción", "Walmart", "Soriana");

function cambia(){
    var lugarCompra;
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
var optionValue= document.getElementById("slcLocales");
var valueOption= optionValue.value;
var imagenPrecio= document.getElementById("imagen");

/* OBJETO CON LA DIRECCION DE CADA IMAGEN SEGUN EL RESTAURANTE */
var imagenesMenus = {
    'Burger King': './img/burguer.webp',
    'Dulce Crepa' : './img/crepa.jpg',
    'El Globo': './img/globo.webp',
    'Kentucky Fried Chicken':'./img/kfc.jfif'
}
const imagenDefault = "./img/LOGO DELIVERYzhzs.webp";

const loki = imagenesMenus[valueOption] || imagenDefault;
imagenPrecio.src =`${loki}`
}








