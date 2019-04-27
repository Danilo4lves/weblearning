const person = {
    greetings: "good morning",
    speak() {
        console.log(this.greetings)
    }
}

person.speak()
const speak = person.speak
speak() // Conflict between paradigms: functional and OO

const speak2 = person.speak.bind(person)
speak2()