let Compare1 = function(comp) {
    console.log(this === comp)
}

Compare1(global)

const obj = {}
Compare1 = Compare1.bind(obj)
Compare1(global)
Compare1(obj)

let Compare2 = comp => console.log(this === comp)
Compare2(global)
Compare2(module.exports)

Compare2 = Compare2.bind(obj)
Compare2(obj)
Compare2(module.exports)