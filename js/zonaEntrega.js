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





