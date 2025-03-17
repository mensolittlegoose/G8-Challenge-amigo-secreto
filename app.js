let nombres_amigos =[];

function agregarAmigo(){
    let nombre = (document.getElementById('amigo')).value;

    if(nombre == ""){
        alert("Por favor, inserte un nombre.");
    }
    nombres_amigos.push(nombre)
    mostrar_lista_amigos();
    limpiar_txt();
}

function limpiar_txt() {
    document.querySelector('#amigo').value ='';
}

function mostrar_lista_amigos() {
    let lista_amigos = document.getElementById('listaAmigos');
    lista_amigos.innerHTML = "";

    for (let amigo of nombres_amigos) {
        let elemento_lista = document.createElement('li');
        elemento_lista.textContent = amigo;
        lista_amigos.appendChild(elemento_lista);
    }
}

function sortearAmigo() {
    if(nombres_amigos.length == 0){
        alert("Por favor, inserte un nombre.");
    }
    nombre_sorteado = nombres_amigos[random(nombres_amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = nombre_sorteado;
}

function random(max){
    return Math.floor(Math.random() * max);
}
