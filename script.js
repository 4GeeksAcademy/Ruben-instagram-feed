//-----------------------------------------CONSTANTES---------------------------------------------------------
const like=document.querySelector("#like");
const comment=document.querySelector("#comment");
const send=document.querySelector("#send");
const save=document.querySelector("#save");


//------------------------------------------FUNCIONES---------------------------------------------------------

//Funcion que añade el efecto de latir
function addFade(boton){
    boton.classList.add("fa-beat-fade");
}

//Funcion que quita el efecto de latir
function removeFade(boton){
    boton.classList.remove("fa-beat-fade");
}

//Funcion que añade estilos al boton like al hacer click
function likeClick(){
    like.classList.add("fa-bounce");
    like.classList.toggle("fa-regular");
    like.classList.toggle("fa-solid");
    like.classList.toggle("color-red");
    setTimeout(()=>{like.classList.remove("fa-bounce")},"1000");
}

//Funcion que añade estilos al boton comment al hacer click
function commentClick(){
    comment.classList.add("fa-shake");
    comment.classList.toggle("fa-regular");
    comment.classList.toggle("fa-solid");
    setTimeout(()=>{comment.classList.remove("fa-shake")},"500");
}

//Funcion que añade estilos al boton save al hacer click
function saveClick(){
    save.classList.add("fa-flip")
    setTimeout(()=>{save.classList.toggle("fa-regular");save.classList.toggle("fa-solid");},"250");
    setTimeout(()=>{save.classList.remove("fa-flip")},"500");
}
//--------------------------------------------EVENTOS---------------------------------------------------------

//Eventos del boton like
like.addEventListener("mousemove",() => {addFade(like)});
like.addEventListener("mouseout",() => {removeFade(like)});
like.addEventListener("click",() => {removeFade(like); likeClick()});


//Eventos del boton comment
comment.addEventListener("mousemove",() => {addFade(comment)});
comment.addEventListener("mouseout",() => {removeFade(comment)});
comment.addEventListener("click",()=>{removeFade(comment); commentClick()});

//Eventos del boton send
send.addEventListener("mousemove",() => {addFade(send)});
send.addEventListener("mouseout",() => {removeFade(send)});


//Eventos del boton save
save.addEventListener("mousemove",() => {addFade(save)});
save.addEventListener("mouseout",() => {removeFade(save)});
save.addEventListener("click",()=>{removeFade(save); saveClick()});