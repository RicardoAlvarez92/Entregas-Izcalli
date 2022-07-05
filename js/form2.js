/* AL DAR CICK EN ALGUNA BOTON DE ZONA DE ENTREGA  TOMA EL VALOR Y LO RESGISTRA EN EL INPUT SEGUN LA ZONA SELECIONADA  */
let inputU = document.getElementById("ubi_inpu");
function coloZonaEntrega(btnClickeado){
    valorBtnClickeado = btnClickeado.innerHTML;
    inputU.value = `${valorBtnClickeado}`;
}



/* EL SIGUIENTE CODIGO OCUPA LA BASE DE DATOS CREADA EN DATOS TIPO JASON (RESTAURANTES.JSON) Y ATRAVEZ DE FETCH RECUPERA ESA INFORMACION PARA PARA DESPUES INSERTAR EN EL HTML BOTONES PARA LA SELECCION DE RESTAURANTE SEGUN LA CATEGORIA SELECIONADA */

function mostrarCategoriaSelec(click1){
    const idBtnCategoria = document.getElementById(`${click1}`);
     parrafoElemClickeado = idBtnCategoria.getElementsByTagName("p");
    /* console.log(parrafoElemClickeado[0].innerHTML);
    console.log(click1); */
    limpiarListaRest()
    cargarJson();

} 

listaRestaurantes = document.getElementById("lista_restaurantes");

function cargarJson(){
    fetch("./js/restaurantes.json")
    .then(function(res){
        return res.json();
    })
        
        for(i=0; i<data.length;i++){

            /* COMPARA EL ID DE LA CATEGORIA ELEGIDA Y MUESTRA EN PANTALLA LAS QUE TIENEN ELMISMO VALOR */
            if(data[i].categoria == parrafoElemClickeado[0].innerHTML){

                const botonRestaurant =document.createElement("button");  

                botonRestaurant.setAttribute("class", "card col-12 col-md-6 container-fluid border-0 mt-3");
                botonRestaurant.setAttribute("onclick", "mostrarMenuRest(this.id)");
                botonRestaurant.setAttribute("id", `${data[i].id_restaurant}`);
    
                botonRestaurant.innerHTML +=
                `<div class="row"> 
                    <img class="col-4" src=${data[i].imagen} alt="imagen${data[i].nombre}">
                    <div class="col-8">  
                        <h5 class="card-title col-12 mt-2">${data[i].nombre}</h5>
                        <h6 class="card-title col-12">${data[i].ubicacion}</h6>         
                        <div class="card-text col-12  "><small class="">Horario:</small></div>
                        <div class="card-text col-12 "><small class="">${data[i].apertura} -- ${data[i].cierre}</small></div>
                    </div>
                </div>`
              
                 listaRestaurantes.appendChild(botonRestaurant);

            /* SI SE ESCOGE LA CETEGORIA "TODO" RECORRE TODA LA INFORMACION EN LA DATA PARA MOSTRAR EN PANTALLA TODOS LOS RESTAURANTES */
            }else if(parrafoElemClickeado[0].innerHTML == "Todo"){
                i=0;
                while(i < data.length){

                    const botonRestaurant =document.createElement("button");  

                botonRestaurant.setAttribute("class", "card col-12 col-md-6 container-fluid border-0 mt-3");
                botonRestaurant.setAttribute("onclick", "mostrarMenuRest(this.id)");
                botonRestaurant.setAttribute("id", `${data[i].id_restaurant}`);
    
                botonRestaurant.innerHTML +=
                `<div class="row"> 
                    <img class="col-4" src=${data[i].imagen} alt="imagen${data[i].nombre}">
                    <div class="col-8">  
                        <h5 class="card-title col-12 mt-2">${data[i].nombre}</h5>
                        <h6 class="card-title col-12">${data[i].ubicacion}</h6>         
                        <div class="card-text col-12  "><small class="">Horario:</small></div>
                        <div class="card-text col-12 "><small class="">${data[i].apertura} -- ${data[i].cierre}</small></div>
                    </div>
                </div>`
              
                 listaRestaurantes.appendChild(botonRestaurant);
                
                 i++

                };

            }else{
                /* console.log(`No es ${parrafoElemClickeado[0].innerHTML}`);    */      
            }   
        }    
    })
}

/* ESTA FUNCION LIMPIA LA LISTA DE RESTAURANTES PARA QUE AL DAR CLICK EN OTRA O LA MISMA CATEGORIA NO SE MUESTREN MAS DE UNA VEZ  */

function limpiarListaRest(){
        listaRestXcategoria = listaRestaurantes.getElementsByTagName("button");
         if(listaRestXcategoria.length != 0){
            i=0;
            while(i< listaRestXcategoria.length){
            listaRestaurantes.removeChild(listaRestXcategoria.item(i));
            i=0;
        }
           }else{
            /* console.log("que siga la fiesta") */
         } }
/* MOSTRAR MENU DE RESTAURANTE SELECCIONADO */

function mostrarMenuRest(idRestClickeado){
    limpiarListaRest();
    fetch("./js/restaurantes.json")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
    const idBtnRestaurantMenu = document.getElementById(`${idRestClickeado}`);
    
    for(i=0; i<data.length;i++){
        if(data[i].id_restaurant == idRestClickeado){
              /* const cambiaTextMenu = document.getElementById("selec_menu");
              cambiaTextMenu.innerHTML="Selecciona Tus Articulos:";
                img = data[i].imagen;
                nom = data[i].nom;*/
                bebe = data[i].menu; 

                /* HACE QUE MANTENGA EL RESTUARANTE SELECCIONADO HASTA ARRIBA DE LA LISTA  */
               /*  const nombreRestMenu = document.createElement("button"); 

                nombreRestMenu.setAttribute("class", "card col-12 col-md-6 container-fluid border-0 mt-3");
    
                nombreRestMenu.innerHTML +=
                `<div class="row"> 
                    <img class="col-4" src=${data[i].imagen} alt="imagen${data[i].nombre}">
                    <div class="col-8">  
                        <h5 class="card-title col-12 mt-2">${data[i].nombre}</h5>
                        <h6 class="card-title col-12">${data[i].ubicacion}</h6>         
                        <div class="card-text col-12  "><small class="">Horario:</small></div>
                        <div class="card-text col-12 "><small class="">${data[i].apertura} -- ${data[i].cierre}</small></div>
                    </div>
                </div>`
              
                 listaRestaurantes.appendChild(nombreRestMenu); */

                /* nombreRestMenu.setAttribute("class", ) */
                for(i=0; i<bebe.length;i++){
                    const nuevoBtnMenu =document.createElement("button");
                    nuevoBtnMenu.setAttribute("class", "card col-12 col-md-6 container-fluid border-0 mt-3");
                    nuevoBtnMenu.innerHTML +=
                    `<div class="row p-0 justify-content-start">
                        <h5 class="card-title d-flex justify-content-start col-9 mt-2">${bebe[i].titulo}</h5>
                        <h4 class="card-title col-3 mt-2 align-self-end d-flex justify-content-end">$${bebe[i].precio}</h4>         
                        <div class="card-text col-12 d-flex justify-content-start">
                            <small class="d-flex justify-content-start">${bebe[i].descripcion}</small>
                        </div>
                       </div>     
                    `
                

                    listaRestaurantes.appendChild(nuevoBtnMenu);        
            }
        }else{

            console.log("NO")
        }
    
        }
    })/* cirrea funcion donde obtiene datos del archivo json */
};/* cierra funcion mostrarMenuRest */

