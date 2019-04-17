console.log() // The dot is used to access an element within another element
console.log(Math.floor(7.4))

const obj1 = {}
obj1.name = "Danilo"
console.log(obj1.name)

function Obj(name){
    this.name = name
    this.exec = function(){
        console.log("exec...")
    }
}

const obj2 = new Obj("Chair")
const obj3 = new Obj("Test")
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
obj2.exec()