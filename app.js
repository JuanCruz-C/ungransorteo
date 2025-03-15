// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let AmigoJugador = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    const inputAmigo = document.getElementById ("amigo");
    const nombreAmigosSecreto = inputAmigo.value.trim();
    

    if(nombreAmigosSecreto === ""){
        alert("Por favor, ingrese un nombre");
        return;
    }     
    if(AmigoJugador.includes(nombreAmigosSecreto)){
        alert(`El nombre ${AmigoJugador} ya esta en la lista`); 
        return;
    }
    
    AmigoJugador.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = ""
    actualizaListaAmigos();
}

function actualizaListaAmigos(){
    listaAmigos.innerHTML = "";

    for(let i = 0; i <AmigoJugador.length; i++){
        const li = document.createElement (`li`);
        li.textContent = AmigoJugador[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(AmigoJugador.length === 0){
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }
    const random = Math.floor(Math.random() * AmigoJugador.length);
    const amigoSecreto = AmigoJugador[random];
    ulResultado.innerHTML = `<li> El amigo secreto es:${amigoSecreto}</li> `;
}
