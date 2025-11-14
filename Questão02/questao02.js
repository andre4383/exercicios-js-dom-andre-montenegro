const forma = document.getElementById("forma");
const btn = document.getElementById("btn");


function mudarForma(){
if (btn.innerText == "Mudar forma"){
    forma.style.borderRadius = "0%";
    btn.innerText = "Retornar forma original";

} else {
    forma.style.borderRadius = "50%";
    btn.innerText = "Mudar forma";
}
}