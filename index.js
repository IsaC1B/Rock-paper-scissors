let opponent;
// opponent = 1: jugar contra otro jugador
// opponent = 0: jugar contra otro ordenador

let cantidadDeIntentos = 0; // Cantidad de intentos decididos por el jugador
let seleccionJugador1; // Opción seleccionada por jugador 1
let seleccionJugador2; // Opción seleccionada por jugador 2
let limite_intentos; // Contador de intentos
// 1: piedra
// 2: papel
// 3: tijera

//----------------------------------------//
let jugador1jugo = false; // Valor booleano que representa si el jugador 1 jugó o no
let jugador2jugo = false; // Valor booleano que representa si el jugador 2 jugó o no

// Esta función ejecuta la lógica de tomar el valor del input, y comprobar que este valor sea númerico, si no es así le pedirá al usuario que ponga un valor númerico
const menuButtonHandler = () => {
    let valorInput; // Es una variable que almacenana el valor del input

    // Salvedad: Para valores iguales o inferiores a 0 no se garantizan resultados
    valorInput = document.querySelector("#cantidad_intentos_input");

    valorInput = parseInt(valorInput.value);

    if (isNaN(valorInput)) {
        alert("Por favor ingrese un valor valido");
    } else {
        document.querySelector(".overlay").style.display = "none";
        limite_intentos = valorInput;
    }
};

// Funciones que se ejecutan al pulsar los botones del menu
const onMenuButtonPlayWithPersonHandler = () => {
    menuButtonHandler();
    opponent = 1;
};

const onMenuButtonPlayWithPcHandler = () => {
    menuButtonHandler();
    opponent = 0;
    // Si limite de intentos es iguala undefined, menuButtonHandler no empezó la partida
    if (limite_intentos !== undefined) {
        document.querySelector("#opciones_juego2").style.display = "none";
        document.querySelector("#player_2").style.display = "none";
        document.querySelector(".select_an_option_text").style.display = "none";
    }

    /* document.getElementById("opciones_juego2").style.display = "none";
    document.getElementsByClassName("player").style.display = "none"; */
};

//----------------------------------------//

// Funciones para obtener las opciones elegidas por los jugadores
const presRockPlayer1 = () => {
    jugador1jugo = true;
    seleccionJugador1 = 1;
    compareHands();
};

const pressPaperPlayer1 = () => {
    jugador1jugo = true;
    seleccionJugador1 = 2;
    compareHands();
};

const pressScissorsPlayer1 = () => {
    jugador1jugo = true;
    seleccionJugador1 = 3;
    compareHands();
};

const pressRockPlayer2 = () => {
    jugador2jugo = true;
    seleccionJugador2 = 1;
    compareHands();
};

const pressPaperPlayer2 = () => {
    jugador2jugo = true;
    seleccionJugador2 = 2;
    compareHands();
};

const pressScissorsPlayer2 = () => {
    jugador2jugo = true;
    seleccionJugador2 = 3;
    compareHands();
};

//----------------------------------------//

// Función para comparar y saber que jugador ganó

const compareHands = () => {
    let value = 0;
    if (limite_intentos > cantidadDeIntentos) {
        if (opponent === 1) {
            // Caso si el juego se hace contra humano
            if (jugador1jugo && jugador2jugo) {
                if (seleccionJugador1 === seleccionJugador2) {
                    value = parseInt(
                        document.querySelector("#puntos_empate").innerHTML
                    );

                    document.querySelector("#puntos_empate").innerHTML =
                        value + 1;
                } else if (
                    (seleccionJugador1 === 1 && seleccionJugador2 === 3) ||
                    (seleccionJugador1 === 2 && seleccionJugador2 === 1) ||
                    (seleccionJugador1 === 3 && seleccionJugador2 === 2)
                ) {
                    value = parseInt(
                        document.querySelector("#puntos_jugador_1").innerHTML
                    );
                    document.querySelector("#puntos_jugador_1").innerHTML =
                        value + 1;
                } else {
                    value = parseInt(
                        document.querySelector("#puntos_jugador_2").innerHTML
                    );
                    document.querySelector("#puntos_jugador_2").innerHTML =
                        value + 1;
                }
                cantidadDeIntentos++;
                displayCorrectMatch();
                jugador1jugo = false;
                jugador2jugo = false;
            }
        } else {
            // Caso si el juego se hace contra ordenador

            seleccionJugador2 = Math.floor(Math.random() * 3) + 1;

            if (seleccionJugador1 === seleccionJugador2) {
                value = parseInt(
                    document.querySelector("#puntos_empate").innerHTML
                );

                document.querySelector("#puntos_empate").innerHTML = value + 1;
            } else if (
                (seleccionJugador1 === 1 && seleccionJugador2 === 3) ||
                (seleccionJugador1 === 2 && seleccionJugador2 === 1) ||
                (seleccionJugador1 === 3 && seleccionJugador2 === 2)
            ) {
                value = parseInt(
                    document.querySelector("#puntos_jugador_1").innerHTML
                );
                document.querySelector("#puntos_jugador_1").innerHTML =
                    value + 1;
            } else {
                value = parseInt(
                    document.querySelector("#puntos_jugador_2").innerHTML
                );
                document.querySelector("#puntos_jugador_2").innerHTML =
                    value + 1;
            }
            jugador1jugo = true;
            jugador2jugo = true;
            cantidadDeIntentos++;
            displayCorrectMatch();
        }
    } // Se muestra si la longitud del juego fue alcanzada
    else {
        document.querySelector(".overlay_end_game").style.display = "flex";

        let PuntosJugador1 = parseInt(
            document.querySelector("#puntos_jugador_1").innerHTML
        );
        let PuntosJugador2 = parseInt(
            document.querySelector("#puntos_jugador_2").innerHTML
        );

        if (PuntosJugador1 > PuntosJugador2) {
            document.querySelector("#resultado_del_juego").innerHTML =
                "Player 1 wins";
        } else if (PuntosJugador1 < PuntosJugador2) {
            document.querySelector("#resultado_del_juego").innerHTML =
                " Player 2 wins";
        } else {
            document.querySelector("#resultado_del_juego").innerHTML = "Empate";
        }
    }
};

const displayCorrectMatch = () => {
    document.querySelector("#hand_player_1").style.display = "flex";
    if (seleccionJugador1 === 1) {
        document.querySelector("#hidde_rock1").style.display = "flex";
    } else if (seleccionJugador1 === 2) {
        document.querySelector("#hidde_paper1").style.display = "flex";
    } else if (seleccionJugador1 === 3) {
        document.querySelector("#hidde_scissors1").style.display = "flex";
    }

    console.log("seleccion jugador 2:" + seleccionJugador2);

    document.querySelector("#hand_player_2").style.display = "flex";
    if (seleccionJugador2 === 1) {
        document.querySelector("#hidde_rock2").style.display = "flex";
    } else if (seleccionJugador2 === 2) {
        document.querySelector("#hidde_paper2").style.display = "flex";
    } else if (seleccionJugador2 === 3) {
        document.querySelector("#hidde_scissors2").style.display = "flex";
    }

    // Llamar a la función que oculta los elementos después de 4 segundos
    setTimeout(removeStyles, 4000);

    document.querySelector(".contenedor_juego").style.display = "none";
};

const removeStyles = () => {
    document.querySelector(".contenedor_juego").style.display = "flex";
    document.querySelector("#hand_player_1").style.display = "none";
    document.querySelector("#hidde_rock1").style.display = "none";
    document.querySelector("#hidde_paper1").style.display = "none";
    document.querySelector("#hidde_scissors1").style.display = "none";

    document.querySelector("#hand_player_2").style.display = "none";
    document.querySelector("#hidde_rock2").style.display = "none";
    document.querySelector("#hidde_paper2").style.display = "none";
    document.querySelector("#hidde_scissors2").style.display = "none";
};

/* Función random por si el ususario quiere jugar con ordenador */ /* PROBAR */

const onButtonPlayWithPcHandler = () => {
    menuButtonHandler();
    opponent = 0;
    let random = Math.floor(Math.random() * 3) + 1;
    seleccionJugador2 = random;
    compareHands();
};
