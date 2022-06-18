/* VARIABLE QUE ALMACENA EL INPUT A MODIFICAR */
let inputU = document.getElementById("ubicacion-input");

/* VARIABLE Y FUNCION QUE MODIFICA EL INPUT DE UBICACION AL HACER CLICK :  */

/* COFRADIA 124 */
let btnCof124 =document.getElementById("btn_cof124");

function funcionCof124(){
    let placeCof124 = btnCof124.innerHTML;
    inputU.placeholder = `${placeCof124}`;
}

btnCof124.addEventListener("click",funcionCof124);

/* CLAUSTROS SAN MIGUEL */
let btnClaustros =document.getElementById("btn_claustros");

function funcionClaustros(){
    let placeClaustros = btnClaustros.innerHTML;
    inputU.placeholder = `${placeClaustros}`;
}
btnClaustros.addEventListener("click",funcionClaustros);

/* URBI QUINTA */
let btnUrbi =document.getElementById("btn_urbi");

function funcionUrbi(){
    let placeUrbi = btnUrbi.innerHTML;
    inputU.placeholder = `${placeUrbi}`;
}
btnUrbi.addEventListener("click",funcionUrbi);

/* JARDINES SAN MIGUEL 3 */
let btnJardines3 =document.getElementById("btn_jardines3");

function funcionJardines3(){
    let placeJardines3 = btnJardines3.innerHTML;
    inputU.placeholder = `${placeJardines3}`;
}
btnJardines3.addEventListener("click",funcionJardines3);

/* COFRADIA 3 */
let btnCof3 =document.getElementById("btn_cof3");

function funcionCof3(){
    let placeCof3 = btnCof3.innerHTML;
    inputU.placeholder = `${placeCof3}`;
}
btnCof3.addEventListener("click",funcionCof3);


/* RINCONADA CUAUTITLAN*/
let btnRinconada =document.getElementById("btn_rinconada");

function funcionRinconada(){
    let placeRinconada = btnRinconada.innerHTML;
    inputU.placeholder = `${placeRinconada}`;
}
btnRinconada.addEventListener("click",funcionRinconada);

/* EX HACIENDA SAN MIGUEL*/
let btnExHcienda =document.getElementById("btn_exHacienda");

function funcionExHcienda(){
    let placeExHacienda = btnExHcienda.innerHTML;
    inputU.placeholder = `${placeExHacienda}`;
}
btnExHcienda.addEventListener("click",funcionExHcienda);

/* BOSQUES 2DA*/
let btnBos2 =document.getElementById("btn_bos2");

function funcionBos2(){
    let placeBos2 = btnBos2.innerHTML;
    inputU.placeholder = `${placeBos2}`;
}
btnBos2.addEventListener("click",funcionBos2);

/* JARDINES DE LAHACIENDA*/
let btnJarHda =document.getElementById("btn_jarHda");

function funcionJarHda(){
    let placeJarHda = btnJarHda.innerHTML;
    inputU.placeholder = `${placeJarHda}`;
}
btnJarHda.addEventListener("click",funcionJarHda);

/* REAL DE SAN JUAN*/
let btnRealSan =document.getElementById("btn_realSan");

function funcionRealSan(){
    let placeRealSan = btnRealSan.innerHTML;
    inputU.placeholder = `${placeRealSan}`;
}
btnRealSan.addEventListener("click",funcionRealSan);





