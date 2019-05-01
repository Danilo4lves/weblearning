// A factory function always returns an object, can be used to create multiple objects faster.

// Simple factory
function createPerson(){
    return {
        name: "Danilo",
        lastName: "Alves"
    }
}

console.log(createPerson())