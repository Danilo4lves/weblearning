const cars = ["Audi", "BMW", "Mercedes"]

function print(name, index){
    console.log(`${index+1}. ${name}`)
}

cars.forEach(print)
cars.forEach(x => console.log(x))