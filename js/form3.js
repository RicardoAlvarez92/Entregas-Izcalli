/* 1.-FUNCION PARA ZONA DE ENTREGA */
function eligeZonaEntrega(zonaElegida){
/* Obtiene el valor del texto de la etiqueta h5 del boton clickeado */
  nombreZona = zonaElegida.querySelector("h5").innerHTML; 
  /* obtiene el valor del atributo src de la etiqueta img del boton clickeado */
  imagenZonEntrega = zonaElegida.querySelector("img").src;
/* coloca el valor de la variable nombreZona en ek input de ubicacional final de la pagina */
  document.getElementById("zona_entrega_input").value = `${nombreZona}`; 
/* selecciona el elemento vacio por id donde ira el titulo despues de seleccionar la zona de entrega  */
     let contenedorVacio = document.getElementById("contenedor_zonaEnt_vacio"); 
      let elementosContenedor = contenedorVacio.children;/*  refactorizar codigo se uso para obtener valor 0 para usar en if */
/* esta funcion tiene el elemento a crear que ira como titluo depues de seleccionar la zona de entrega */
      const tituloZonaEntrega = () => {         
        zonaEntregaElegida = document.createElement("div");
        zonaEntregaElegida.setAttribute("id", "zonaEnt_titulo")
        zonaEntregaElegida.setAttribute("class", "container-fluid d-flex justify-content-center align-items-center");
        zonaEntregaElegida.innerHTML += 
          `<div>
              <img class="img-fluid" src=${imagenZonEntrega} alt="Cofradia I" width="60">
          </div>
          <h5 class="ml-3">
              ${nombreZona}
          </h5>`
        contenedorVacio.setAttribute("class", "col-12 mb-3 border")
        contenedorVacio.appendChild(zonaEntregaElegida);
      }
/* se usa el if para clocar un nuevo elemento como titulo si el valor del recorrido de los hijos del contenedor vacio es 0 o en caso contrario borrar al elemento creado que ocupo el titulo tras elegir zona de entrega*/
        if(elementosContenedor.length == 0){
        tituloZonaEntrega();
        }else{    
          document.getElementById("zonaEnt_titulo").remove();
          tituloZonaEntrega();
        }
/* Se cambia el valor de collapse-show a collapse en la calse del elemento para esconder los botones tras haber elegido zona deentrega*/
      document.getElementById("contenedor_zona_entrega")
      .setAttribute("class", "collapse col-12 mb-3"); 
/* Quita el valor d-none para mostara la seiguiente seccion de categorias */
      document.getElementById("contenedor_categorias")
      .setAttribute("class", "col-12 container-fluid")
};
/* funcion para trarte datos json y creacion de objeto restaurante. */




/*  cargarRestaurantes(); */
/*2 FUNCION PARA CATEGORIAS */
function seleccionCategoria(CategoriaClickeada){
  /* cargarRestaurantes(); */
/*  Obtiene el valor del texto de la etiqueta h5 del boton clickeado  */
  nombreCategoria = CategoriaClickeada.querySelector("p").innerHTML; 
/* obtiene el valor del atributo src de la etiqueta img del boton clickeado */
  imagenCategoria = CategoriaClickeada.querySelector("div").querySelector("img").src;
/* selecciona el elemento vacio por id donde ira el titulo despues de seleccionar la categoria  */
  let contenedorVacio = document.getElementById("contenedor_categoriaSelec_vacio"); 
  let elementosContenedor = contenedorVacio.children;/*  refactorizar codigo se uso para obtener valor 0 para usar en if */
/* esta funcion tiene el elemento a crear que ira como titluo depues de seleccionar la categoria */
  const tituloCategoria = () => {         
    categoriaElegida = document.createElement("div");
    categoriaElegida.setAttribute("id", "categoria_titulo")
    categoriaElegida.setAttribute("class", "container-fluid d-flex justify-content-center align-items-center");
    categoriaElegida.innerHTML += 
      `<div>
          <img class="img-fluid" src=${imagenCategoria} alt="${nombreCategoria}" width="60">
      </div>
      <h5 class="ml-3">
          ${nombreCategoria}
      </h5>`
    contenedorVacio.setAttribute("class", "col-12 mb-3 border")
    contenedorVacio.appendChild(categoriaElegida);
  }

  /* se usa el if para clocar un nuevo elemento como titulo si el valor del recorrido de los hijos del contenedor vacio es 0 o en caso contrario borrar al elemento creado que ocupo el titulo tras elegir zona de entrega*/
  if(elementosContenedor.length == 0){
    tituloCategoria();
    }else{    
      document.getElementById("categoria_titulo").remove();
      tituloCategoria();
    }
 /* Se cambia el valor de collapse-show a collapse en la calse del elemento para esconder los botones tras haber elegido categoria*/
 document.getElementById("categorias")
 .setAttribute("class", "collapse mt-2 mb-2 container"); 
/* Quita el valor d-none para mostara la seiguiente seccion de lista de restaurantes segun categoria elegida*/
  document.getElementById("contenedor_restaurantes")
 .setAttribute("class", " container-fluid") 
/* funcion para elegir restaurates segun categoria elegida */
 function cargarRestaurantes(){
  fetch(`./js/restaurantes.json`)
  .then(respuesta => respuesta.json())
  .then (restaurantes => 
    restaurantes.forEach(restaurante => {   

      creaBtnRest = () =>{
       let contListaRest = document.getElementById("lista_restaurantes");
        btnNuevo = document.createElement("div");
        btnNuevo.setAttribute("class", "col-12 col-md-6 col-xl-4 mt-2");
        btnNuevo.innerHTML += 
        `<button onclick="cargarMenuRest(this)" class="btn bg-white container-fluid border">  
            <div class="row">
                <div class="col-4 d-flex justify-content-center align-items-center">
                    <img class="img-fluid" src=${restaurante.imagen} alt=${restaurante.nombre} width="90">
                </div>
                <div class="col-8 d-flex flex-column align-items-start">
                    <h5>${restaurante.nombre}</h5>
                    <P class="m-0">${restaurante.ubicacion}</p>
                    <p class="m-0 text-muted">Horario Reparto:</p>
                    <p class="m-0 text-muted">${restaurante.dias_ap[0]} - ${restaurante.dias_ap[restaurante.dias_ap.length-1]}  /  ${restaurante.apertura} - ${restaurante.cierre}</p>
                </div> 
            </div>  
          </button>` 
    
        contListaRest.appendChild(btnNuevo); 
        }
/* if que sirve como filtro para crear los botones segun la categoria elegida */
      if(restaurante.categoria == nombreCategoria){
        creaBtnRest();
      }else if(nombreCategoria == "Todo"){
          creaBtnRest();
      }else{
        console.log("no eres " + nombreCategoria);
      }    
   })
  )
}
/* funcion para limpiar la lista de botones de restaurantes al cambiar de categoria*/
function limpiarListaRest(){
  let contenedor = document.getElementById("lista_restaurantes")
  let limpiar = contenedor.getElementsByTagName("div");
   if(limpiar.length != 0){
      i=0;
      while(i< limpiar.length){
      contenedor.removeChild(limpiar.item(i));
      i=0;
  }
     }else{
      /* console.log("que siga la fiesta") */
   } 
   /* mantiene el valor de la calse collapse-show al estar cambiando de categoria*/
   document.getElementById("lista_restaurantes")
   .setAttribute("class", "collapse-show row mb-3");
  }

limpiarListaRest();
cargarRestaurantes();

  }






  


