//MANIPULANDO o DOM:

// Cria um novo elemento "script"
let script = document.createElement("script");

// Define o atributo "src" do elemento para o endereço do seu arquivo JavaScript
script.src = "index.js";

// Adiciona o elemento "script", ao final do elemento body do seu documento HTML, como ultimo filho
document.body.appendChild(script);

//apontando no elemento tag do HTML
let mudando = document.getElementById("mudar");
//Codigo Fonte para mudar a cor do BG da DIV
function mudarCor() {

    if (!mudando.style.background) {

        mudando.style.background = "#ff0770";
    }
    else {
        mudando.style.background = "";
    }
}
//apontando no elemento tag do HTML
let btn = document.getElementById("btn");
/*Codigo Fonte para mudar a cor do BG do BUTTON
Esta função é quem comandará todas as outras ações.*/
function corDoBotao() {
    if (!btn.style.background) {

        btn.style.background = "#002554";

    }
    else {
        btn.style.background = "";
    }
}
//apontando no elemento tag do HTML
let frase = document.getElementById("frase");
//Codigo Fonte para mudar a cor da Font do button
function corFrase() {
    if (!frase.style.color) {

        frase.style.color = "#ff0770";
        frase.style.fontSize = "3em";

    } else {
        frase.style.color = "";
        frase.style.fontSize = "";

    }
}
//apontando no elemento tag do HTML
let descricao = document.getElementById("descricao");
function exibirDescricao() {
    if (!descricao.style.color) {

        descricao.style.color = "#002554";
    }
    else {
        descricao.style.color = "";
    }
}
//apontando no elemento tag do HTML
let informacao = document.getElementById("informacao");
function paragrafo() {
    if (!informacao.style.color) {

        informacao.style.color = "#fff";
    }
    else {
        informacao.style.color = "";
    }
}
//apontando no elemento tag do HTML
let efeito = document.getElementById("efeito");
function mudarEfeito() {
    if (!efeito.style.background) {

        efeito.style.background = "#7dc623";
        efeito.style.marginTop = "2em";
    }
    else {
        efeito.style.background = "";
        efeito.style.marginTop = "";
    }
}
//apontando no elemento tag do HTML
let effect = document.getElementById("effect");
function mudarEffect() {
    if (!effect.style.background) {

        effect.style.background = "#00aaee";
        effect.style.marginBottom = "";
    }
    else {
        effect.style.background = "";
        effect.style.marginBottom = "-2em";
    }
}
// Boneco -> Movimento
let corpoDoBoneco = document.getElementById("containerBoneco");
function movimentoTotalDoBoneco() {

    if (corpoDoBoneco.style.marginLeft === "") {

        corpoDoBoneco.style.marginLeft = "12em";
    }
    else if (corpoDoBoneco.style.marginLeft <= "12em") {

        corpoDoBoneco.style.marginLeft = "24em";
    }
    else if (corpoDoBoneco.style.marginLeft === "24em") {

        corpoDoBoneco.style.marginLeft = "";
    }
        
//registrando o evento atrelado ao btn
btn.addEventListener("click", mudarCor);
btn.addEventListener("click", corDoBotao);
btn.addEventListener("click", corFrase);
btn.addEventListener("click", exibirDescricao);
btn.addEventListener("click", paragrafo);
btn.addEventListener("click", mudarEfeito);
btn.addEventListener("click", mudarEffect);
btn.addEventListener("click", movimentoTotalDoBoneco);
