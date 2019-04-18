function getRandomInteger(max, min) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let opcao = 1

while (opcao != 0) {
    console.log(opcao)
    opcao = getRandomInteger(10,0)
}