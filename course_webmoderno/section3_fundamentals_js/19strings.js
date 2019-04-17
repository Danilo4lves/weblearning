const escola = "Cod3r";

//Retorna o valor no índice selecionado (como array)
console.log(escola.charAt(4));
console.log(escola.charAt(5));
//Retorna o código na tabela ascii do valor no índice selecionado
console.log(escola.charCodeAt(3));
//Retorna o índice do caractére
console.log(escola.indexOf('3'));
//Retorna a string a partir do índice selecionado
console.log(escola.substring(1));
console.log(escola.substring(0,3));
//Concatenação
console.log("Escola ".concat(escola).concat('!'));
console.log("Escola " + escola + '!');
//Substitui o valor no índice pelo valor especificado
console.log(escola.replace(3, 'e'));
// /\d/ /\w/g
console.log(escola.replace(/\d/, 'e'));
//Gerar um array, separando por um caractére específico
console.log("Ana,Maria,Pedro".split(','));