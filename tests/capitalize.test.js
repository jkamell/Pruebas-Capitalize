// @ts-check

import capitalize from '../src/capitalize.js';

// Prueba principal
if (capitalize('hello') !== 'Hello') {
  throw new Error('Error: capitalize("hello") no funciona');
}

// Caso límite: cadena vacía
if (capitalize('') !== '') {
  throw new Error('Error: capitalize("") no funciona');
}

console.log('¡Todas las pruebas han pasado!');
