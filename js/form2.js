/* AL DAR CICK EN ALGUNA BOTON DE ZONA DE ENTREGA  TOMA EL VALOR Y LO RESGISTRA EN EL INPUT SEGUN LA ZONA SELECIONADA  */
let inputU = document.getElementById("ubi_inpu");
function coloZonaEntrega(btnClickeado){
    valorBtnClickeado = btnClickeado.innerHTML;
    inputU.value = `${valorBtnClickeado}`;
}



/* EL SIGUIENTE CODIGO OCUPA LA BASE DE DATOS CREADA EN DATOS TIPO JASON (RESTAURANTES.JSON) Y ATRAVEZ DE FETCH RECUPERA ESA INFORMACION PARA PARA DESPUES INSERTAR EN EL HTML BOTONES PARA LA SELECCION DE RESTAURANTE SEGUN LA CATEGORIA SELECIONADA */
function hola10(click1){
    const idBtnClickeado = document.getElementById(`${click1}`);
     parrafoElemClickeado = idBtnClickeado.getElementsByTagName("p");
    console.log(parrafoElemClickeado[0].innerHTML);
    console.log(click1);

    limpiarListaRest()
    cargarJson();

} 
listaRestaurantes = document.getElementById("lista_restaurantes");

function cargarJson(){
    fetch("./js/restaurantes.json")
    .then(function(res){
        return res.json();
    })
    .then (function(data){
        for(i=0; i<data.length;i++){
            if(data[i].categoria == parrafoElemClickeado[0].innerHTML){

                const botonRestaurant =document.createElement("button");  

                botonRestaurant.setAttribute("class", "card col-12 col-md-6 container-fluid border-0 mt-3")
    
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

            }else{
                console.log(`No es ${parrafoElemClickeado[0].innerHTML}`);
                
            }   
        }
       

    })
}

/* ESTA FUNCION LIMPIA LA LISTA DE RESTAURANTES PARA QUE AL DAR CLICK EN OTRA O LA MISMA CATEGORIA SE NO E IMPRIMAN MAS DE UNA VEZ  */


function limpiarListaRest(){
    dbs = listaRestaurantes.getElementsByTagName("button");
    console.log(dbs.length);

}

