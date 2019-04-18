function getRandomInteger(max, min) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let opcao = 1

do {
    opcao = getRandomInteger(10,-1)
    console.log(opcao)
} while (opcao != 0) 
