const url = "http://localhost:3000/api/restaurante/";
tbodyRest = document.getElementById("tbodyRest");
const tbodyRest2 = document.getElementById("tbodyRest_2")

let resultados = "";

const formRest = document.getElementById("formRest");
const nombreRest = document.getElementById("nombreRest");
const ubicacionRest = document.getElementById("ubicacionRest");
const categoriaRest = document.getElementById("categoriaRest");
const diasRest = document.getElementById("diasRest");
const aperturaRest = document.getElementById("aperturaRest");
const cierreRest = document.getElementById("cierreRest");
const imagenRest = document.getElementById("imagenRest");
let opcion = "";


btnCrear.addEventListener('click', ()=>{
/* Se colocam loscampos vacios cada vez que se abre el modal */    
    nombreRest.value = "";
    ubicacionRest.value = "";
    categoriaRest.value= "Categoria"
    diasRest.value = "";
    aperturaRest.value = "";
    cierreRest.value = "";
    imagenRest.value = "";
/* Se muestra el el modal/ventana del Html obteniendolo del ID */
    let modalRest =  new bootstrap.Modal(document.getElementById("modalRest"));
    modalRest.show();
/* se coloca valor crear a la variable opcion */    
    opcion = "crearRest"
});

//Funcion para mostarar los datos 
const mostrarRest = (restaurantes, tbody)=>{
    restaurantes.forEach(restaurante => {
        resultados += 
                    `<tr class="text-center">
                        <td><a class="btnIdRest btn">${restaurante.id_restaurante}</a> </td>
                        <td>${restaurante.imagen}</td>
                        <td>${restaurante.nombre_restaurante}</td>
                        <td>${restaurante.ubicacion}</td>
                        <td>${restaurante.categoria_restaurante}</td>
                        <td>${restaurante.dias_abierto}</td>
                        <td>${restaurante.apertura}</td>
                        <td>${restaurante.cierre}</td>
                        <td class="text-center"><a class="btnEditar btn"><img src="src/img/icon/editar1.png" alt="Editar" width="20"></a></td>
                        <td class="text-center"><a class="btnBorrar btn"><img src="src/img/icon/borrar1.png" alt="Borrar" width="20"></a></td>
                    </tr>`
    });
   tbody.innerHTML = resultados;
}
//Promesa para traer los datos desde la api
fetch(url)
    .then(res => res.json())
    .then(datos => mostrarRest (datos, tbodyRest))
    .catch(e => console.log(e)) 

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
//Borrar Restaurante
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode.parentNode;
    const id = fila.firstElementChild.firstElementChild.innerHTML;
    alertify.confirm("Estas seguro?",
    ()=> {
        fetch(url+id,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then( ()=> location.reload())
        /* alertify.success('OK') */
    },
    ()=>{
        alertify.error('cancel');
    })
    })

//Editar Restaurante
on(document, 'click', '.btnEditar', e => {
    let idRestForm = 0
    const fila = e.target.parentNode.parentNode.parentNode;
    idRestForm = fila.children[0].children[0].innerHTML;
    idRest = idRestForm;//se ocupa esta variable global para poder psar el valor en el if de abajo 
    const imagenRestForm = fila.children[1].innerHTML;
    const nombreRestForm = fila.children[2].innerHTML;
    const ubicacionRestForm = fila.children[3].innerHTML;
    const categoriaRestForm = fila.children[4].innerHTML;
    const diasRestForm = fila.children[5].innerHTML;
    const aperturaRestForm = fila.children[6].innerHTML;
    const cierreRestForm = fila.children[7].innerHTML;
    imagenRest.value = imagenRestForm;
    nombreRest.value = nombreRestForm;
    ubicacionRest.value = ubicacionRestForm;
    categoriaRest.value = categoriaRestForm;
    diasRest.value = diasRestForm;
    aperturaRest.value = aperturaRestForm;
    cierreRest.value = cierreRestForm;
    opcion = "editarRest"
    let modalRest =  new bootstrap.Modal(document.getElementById("modalRest"));
        modalRest.show();
})

//procedimiento para crear y editar
formRest.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(opcion=="crearRest"){
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre_restaurante: nombreRest.value,
                ubicacion: ubicacionRest.value,
                categoria_restaurante: categoriaRest.value,
                dias_abierto: diasRest.value,
                apertura: aperturaRest.value,
                cierre: cierreRest.value,
                imagen: imagenRest.value 
            })
        })
        .then(res => res.json())
        .then(data=>{
            const nuevoRest=[]
            nuevoRest.push(data)
            mostrarRest(nuevoRest, tbodyRest)
            location.reload()
        })
    }
    if(opcion=="editarRest"){
        fetch(url+idRest,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre_restaurante: nombreRest.value,
                ubicacion: ubicacionRest.value,
                categoria_restaurante: categoriaRest.value,
                dias_abierto: diasRest.value,
                apertura: aperturaRest.value,
                cierre: cierreRest.value,
                imagen: imagenRest.value 
            })
        })
        .then(res => res.json())
        .then(res => location.reload())
    } 
     
})

//Mostarr Categorias del menu del Restaurante
on(document, 'click', '.btnIdRest', e => {
    tbodyRest.setAttribute("class", "d-none")
    const idRest = e.target.innerHTML;
    tbodyRest2.setAttribute("class", "")
    fetch(url+idRest,{
        method:"GET"
    })
    .then(res => res.json())
    .then( restaurante => mostrarRest(restaurante, tbodyRest2))
    
    
   /*  alertify.confirm("Estas seguro?",
    ()=> {
        fetch(url+id,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then( ()=> location.reload())
    },
    ()=>{
        alertify.error('cancel');
    }) */
    })