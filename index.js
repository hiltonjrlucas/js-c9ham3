const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';

console.log(str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
console.log(str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, ''));
console.log('Esta é uma frase!'.replace(/[^\w\-]+/g, '-'))
console.log('Esta é uma frase!'.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\-]+/g, '-'))

// String Á em UTF-18 tem 1 dígito
console.log('Á'.length) // 1

// String Á em Unicode tem 2 dígitos: \u0041\u0301
console.log('Á'.normalize('NFD').length) // 2

// Se tentarmos representar Unicode, vamos obter o seguinte resultado
console.log('\u0041\u0301'); // Á