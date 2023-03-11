/**
 * Para organizar la información, te pedimos crear el objeto literal Concurso con una
propiedad etapas que indicará el resultado parcial por cada etapa. Además, tendrá una
propiedad ganador que guardará el ganador (en caso de que exista) como un string. Te
pedimos además que la función encontrarGanador sea un método del objeto literal
Concurso.
 */

const alicia = [10, 80, 75];
const bob = [90, 20, 25];

function encontrarGanador(a, b) {
  let puntosPrimerParticipante = 0;
  let puntosSegundoParticipante = 0;
  for (let i = 0; i < a.lenght; i++) {
    if (a[i] < b[i]) {
      puntosSegundoParticipante += 1; // =puntosSegundoParticipante + 1
    } else if (a[i] > b[i]) {
      puntosPrimerParticipante += 1;
    }
  }

  if (puntosSegundoParticipante > puntosPrimerParticipante) {
    console.log("el ganador es el segundo participante");
  } else puntosSegundoParticipante < puntosPrimerParticipante;
  console.log("el ganador es el primer participante");
}

encontrarGanador(alicia, bob);

// //Si a[i] > b[i], entonces, Alicia recibe 1 punto.
// Si a[i] < b[i], entonces, Bob recibe 1 punto.
// Si a[i] === b[i], ninguna persona recibe un punto.
