function fixError(error){
    //throw new Error("...")
    //throw 10
    //throw true
    throw "There was an error. Please check!"
}

function printNameUpper(obj){
    try{ // Will try to run the code below, if there is any error, it'll go to catch
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) { // Here I'll try to solve the problem or send a message about it
        fixError(e)
    } finally { // This block will run whatever happens
        console.log("Finally block")
    }
}

const obj = {nome: "Roberto"}
// It will throw an error because obj.name is undefined
printNameUpper(obj)