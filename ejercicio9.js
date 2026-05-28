const nombre = "Luciana Menotti";
const notas = [7, 8, 10, 9, 9];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

const promedio = suma / notas.length;

let mensaje;

if (promedio >= 7) {
  mensaje = "Muy bueno";
} else if (promedio >= 6) {
  mensaje = "Aprobado";
} else {
  mensaje = "Desaprobado";
}

console.log("Nombre: ${nombre}");
console.log("Promedio: ${promedio.toFixed(1)}");
console.log("Resultado: ${mensaje}");
