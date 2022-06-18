/* cel_cliente
nom_cliente
ubicacionInput
lugar_compra
slcLocales
articulo_1
art1_cant */

document.querySelector("#enviar_Whats").addEventListener("click", function(){
    let celCliente = document.querySelector("#cel_cliente").value;
    let nomCliente = document.querySelector("#nom_cliente").value;
    /* let ubicacioninput = document.querySelector("#ubicacion_Input").placeholder; */
    let lugarCompraWhats = document.querySelector("#lugar_compra")
    let locales = document.querySelector("#slcLocales").options.value;
    let articulo1 = document.querySelector("#articulo_1").value;
    let articulo1Cantidad = document.querySelector("#art1_cant").value;

    let url ="https://api.whatsapp.com/send?phone=5578215947&text=*Repartiflash*%0A*Reservas*%0A%0A*Nombre:*%0A" + celCliente + "SI FUNCIONA";

    window.open(url);
})

