import "./style.css";

// Definición de la interfaz GrupoMusical
const GrupoMusical = {
  nombre: "",
  cantanteCompositor: "",
  anioFundacion: 0,
  activo: false,
  genero: "",
};

// Definición de variables para cada género musical
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Crear objetos para cada grupo musical
const theBeatles = {
  nombre: "The Beatles",
  cantanteCompositor:
    "John Lennon, Paul McCartney, George Harrison, Ringo Starr",
  anioFundacion: 1960,
  activo: true,
  genero: popRock,
};

const queen = {
  nombre: "Queen",
  cantanteCompositor: "Freddie Mercury",
  anioFundacion: 1970,
  activo: false,
  genero: rock,
};

const acdc = {
  nombre: "AC DC",
  cantanteCompositor: "Angus Young, Malcolm Young, Bon Scott, Brian Johnson",
  anioFundacion: 1973,
  activo: true,
  genero: hardRock,
};

const beethoven = {
  nombre: "Ludwig van Beethoven",
  cantanteCompositor: "Ludwig van Beethoven",
  anioFundacion: 1770,
  activo: false,
  genero: clasica,
};

const theRollingStones = {
  nombre: "The Rolling Stones",
  cantanteCompositor: "Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood",
  anioFundacion: 1962,
  activo: true,
  genero: rock,
};

// Mostrar cada grupo por consola
console.log(`Nombre del grupo: ${theBeatles.nombre}`);
console.log(`Cantante/Compositor: ${theBeatles.cantanteCompositor}`);
console.log(`Año de fundación: ${theBeatles.anioFundacion}`);
console.log(`Activo: ${theBeatles.activo ? "Sí" : "No"}`);
console.log(`Género musical: ${theBeatles.genero}`);
console.log();

console.log(`Nombre del grupo: ${queen.nombre}`);
console.log(`Cantante/Compositor: ${queen.cantanteCompositor}`);
console.log(`Año de fundación: ${queen.anioFundacion}`);
console.log(`Activo: ${queen.activo ? "Sí" : "No"}`);
console.log(`Género musical: ${queen.genero}`);
console.log();

console.log(`Nombre del grupo: ${acdc.nombre}`);
console.log(`Cantante/Compositor: ${acdc.cantanteCompositor}`);
console.log(`Año de fundación: ${acdc.anioFundacion}`);
console.log(`Activo: ${acdc.activo ? "Sí" : "No"}`);
console.log(`Género musical: ${acdc.genero}`);
console.log();

console.log(`Nombre del grupo: ${beethoven.nombre}`);
console.log(`Cantante/Compositor: ${beethoven.cantanteCompositor}`);
console.log(`Año de fundación: ${beethoven.anioFundacion}`);
console.log(`Activo: ${beethoven.activo ? "Sí" : "No"}`);
console.log(`Género musical: ${beethoven.genero}`);
console.log();

console.log(`Nombre del grupo: ${theRollingStones.nombre}`);
console.log(`Cantante/Compositor: ${theRollingStones.cantanteCompositor}`);
console.log(`Año de fundación: ${theRollingStones.anioFundacion}`);
console.log(`Activo: ${theRollingStones.activo ? "Sí" : "No"}`);
console.log(`Género musical: ${theRollingStones.genero}`);
console.log();
