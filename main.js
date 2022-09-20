function cadenadeCaracteres(texto) {
  let array = [];

  textoArray = texto.split(" ");

  let palabras = textoArray.length;
  array.push(`El texto, tiene "${palabras}" palabras`);

  let primeraPalabra = textoArray.shift();
  array.push(`La primera palabra es "${primeraPalabra}" `);

  let ultimaPalabra = textoArray.pop();
  array.push(`La ultima palabra es "${ultimaPalabra}" `);

  console.log(textoArray);
  console.log(array);
  return array;
}
console.log(cadenadeCaracteres("Lorem ipsum dolor sit amet consectetur"));

let alumnos = [
  {
    nombre: "Mariano Damian",
    apellido: "Hernandez",
    notas: [8, 7, 9, 10, 6],
  },
  {
    nombre: "Ramiro",
    apellido: "Diaz",
    notas: [1, 3, 8, 2, 1],
  },
  {
    nombre: "Ana",
    apellido: "Armella",
    notas: [5, 7, 9, 4, 2],
  },
  {
    nombre: "Romina",
    apellido: "Almeda",
    notas: [10, 6, 7, 5, 9],
  },
  {
    nombre: "Denis",
    apellido: "Tolaba",
    notas: [10, 10, 9, 9, 10],
  },
  {
    nombre: "Hugo",
    apellido: "Castellano",
    notas: [2, 3, 3, 6, 1],
  },
  {
    nombre: "Analia Daiana",
    apellido: "Fonseca",
    notas: [4, 3, 4, 5, 2],
  },
  {
    nombre: "Francisco Daniel",
    apellido: "Samir",
    notas: [5, 5, 6, 4, 2],
  },
];

//Tengo que unir nombre y apellido y despue asociarlo con el promedio.
function promedio(array, estado) {
  let arrayFinal = [];
  array.forEach((element) => {
    let calificaciones = element.notas;
    let i = 0;
    calificaciones.map((e) => (i += e));
    let promedio = i / calificaciones.length;
    let objeto = {
      nombreCompleto: `${element.nombre} ${element.apellido} `,
      promedio: Math.round(promedio),
    };
    objeto.promedio > 6
      ? (objeto.estado = "aprobado")
      : (objeto.estado = "desaprobado");
    if (objeto.estado == estado) {
      arrayFinal.push(objeto);
    }
  });
  return arrayFinal;
}

console.log(promedio(alumnos, "aprobado"));

/*
let arrays = ["jaja", "jejeje", "jijijij", "jojojoj", "jujujujuju", "kaka"];
arrays.push("hola");
let ultima = arrays.pop();
console.log(ultima);

let shift = arrays.shift();
console.log(shift);
let unshif = arrays.unshift();
console.log(unshif);*/
