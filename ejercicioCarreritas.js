/*let participantes =["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];
console.log(participantes);
//primer adelanto de Roberto a Jorge
const indiceJorge = participantes.indexOf("Jorge");
const indiceRoberto = participantes.indexOf("Roberto");
[participantes[indiceJorge], participantes[indiceRoberto]] = [participantes[indiceRoberto], participantes[indiceJorge]];
console.log(participantes);

const indiceRamiro = participantes.indexOf("Ramiro");
//indiceJorge = participantes.indexOf("Jorge");
[participantes[indiceRamiro], participantes[indiceJorge]] = [participantes[indiceRamiro], participantes[indiceJorge]];
console.log(participantes);

/*const indiceParticipante = participantes.indexOf("Roberto");
const adelantoJorge.splice(0, 2, "Jorge" );
console.log(participantes);*/



// Definir el array de posiciones inicial
let participantes = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];
console.log(participantes);

// Adelantar a Jorge
const indiceJorge = participantes.indexOf("Jorge");
const indiceRoberto = participantes.indexOf("Roberto");
[participantes[indiceJorge], participantes[indiceRoberto]] = [participantes[indiceRoberto], participantes[indiceJorge]];

// Adelantar a Ramiro
const indiceRamiro = participantes.indexOf("Ramiro");
[participantes[indiceRamiro], participantes[indiceJorge]] = [participantes[indiceJorge], participantes[indiceRamiro]];

// Lesión de Roberto y salida de la carrera
participantes.splice(indiceRoberto, 1);

// Bajar una posición a Andrea
const indiceAndrea = participantes.indexOf("Andrea");
participantes.splice(indiceAndrea, 1);
participantes.splice(indiceAndrea - 1, 0, "Andrea");

// Reemplazar quinto lugar por Jose
const indiceQuintoLugar = participantes.indexOf("Sofia");
participantes.splice(indiceQuintoLugar, 1, "Jose");

// Resultado final
console.log("Posiciones después de 3 vueltas:", participantes);