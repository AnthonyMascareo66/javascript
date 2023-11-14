// Declara una variable llamada miRefrán y asigna un refrán
var miRefran = "Más vale tarde que nunca.";

// Declara una variable llamada longitudRefran y asigna la cantidad de letras de miRefran
var longitudRefran = miRefran.length;

// Asigna a la variable novenaLetra el valor de la novena letra del refrán
var novenaLetra = miRefran[8]; // Recordar que los índices en JavaScript comienzan desde 0

// Asigna a la variable ultimaLetra el valor de la última letra del refrán
var ultimaLetra = miRefran[miRefran.length - 1];

// Busca el índice de la cadena “que” en tu refrán y asignalo a la variable índicePalabra.
var indicePalabra = miRefran.indexOf("que");

// Si el índice es menor que cero, busca cualquier otra preposición hasta que sea mayor a 0
if (indicePalabra < 0) {
    // Puedes personalizar la lista de preposiciones según tus necesidades
    var preposiciones = ["de", "a", "en", "por"];
    for (var i = 0; i < preposiciones.length; i++) {
        indicePalabra = miRefran.indexOf(preposiciones[i]);
        if (indicePalabra >= 0) {
            break; // Sale del bucle si encuentra una preposición
        }
    }
}

// Reemplaza la preposición encontrada por la cadena “xxx”
if (indicePalabra >= 0) {
    miRefran = miRefran.replace(miRefran.substring(indicePalabra, indicePalabra + preposiciones[i].length), "xxx");
}

// Convierte a mayúsculas todos los caracteres de tu refrán
miRefran = miRefran.toUpperCase();

// Imprime los resultados en la consola para verificar
console.log("miRefran:", miRefran);
console.log("longitudRefran:", longitudRefran);
console.log("novenaLetra:", novenaLetra);
console.log("ultimaLetra:", ultimaLetra);
console.log("índicePalabra:", indicePalabra);
