function Person(){
    this.age = 0

    const self = this
    setInterval(function() {
        //this.age++
        self.age++;
        console.log(self.age)
    }/*.bind(this)*/, 1000)
}

new Person