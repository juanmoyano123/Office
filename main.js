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

/*
let arrays = ["jaja", "jejeje", "jijijij", "jojojoj", "jujujujuju", "kaka"];
arrays.push("hola");
let ultima = arrays.pop();
console.log(ultima);

let shift = arrays.shift();
console.log(shift);
let unshif = arrays.unshift();
console.log(unshif);*/
