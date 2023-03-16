const text = '5) Escreva um programa que inverta os caracteres de um string. IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; b) Evite usar funções prontas, como, por exemplo, reverse';

//Primeira forma:
let inverterOrdem = '';

for(let i = text.length - 1; i >= 0; i--){
    inverterOrdem += text[i];
};

//Seginda forma:
let inverterCaracteres = '';

[...text].forEach(caracter => inverterCaracteres = caracter + inverterCaracteres);

console.log(`Primeira forma: ${inverterCaracteres}`); //retorno invertido - Primeira forma:
console.log('-------------------------');

console.log(`Segunda forma: ${inverterCaracteres}`); //retorno invertido - Segunda forma:
console.log('-------------------------');

console.log(text);