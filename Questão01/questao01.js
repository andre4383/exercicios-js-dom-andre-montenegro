function inserirText() {
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto").value;
    titulo.innerText = texto;
    titulo.style.color = "blue";
}
