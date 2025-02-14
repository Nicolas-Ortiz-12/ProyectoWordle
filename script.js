let intentos = 6;
let diccionario = [
    'AMIGO', 'BELLA', 'CARRO', 'DEDOS', 'ESCAL', 
    'FELIZ', 'GATOS', 'HOGAR', 'IDEAL', 'JUGAR',
    'KIWIS', 'LIBRO', 'MANOS', 'NUBES', 'ORGAN',
    'PARIS', 'QUESO', 'REINO', 'SUEÑO', 'TIEMO',
    'UNICO', 'VIAJE', 'YERBA', 'ZORRO', 'AGUA',
    'BAJAR', 'CIELO', 'DURAR', 'EXTRA', 'FLACO',
    'GRITO', 'HORAS', 'IRANI', 'JUEGO', 'KOALA',
    'LUCES', 'MORIR', 'NOTAR', 'OSADO', 'PIZZA',
    'QUIZA', 'RADAR', 'SALIR', 'TOMAR', 'UNION',
    'VELAR', 'XENON', 'YERNO', 'ZAFAR'
  ];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function intentar(){
    
    const INTENTO = leerIntento();
    if(INTENTO.length !== 5){
        alert("Deben ser palabras de 5 letras")
        return
    }
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
        if (intentos==0){
            terminar("<h1>PERDISTE!</h1>")
        }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

const input = document.getElementById("guess-input");
const valor = input.value;
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);