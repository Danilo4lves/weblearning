const func = []

for (let i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2]()
func[8]()

/*
* As let's scope is only within the for loop the function inside the array
* remembers where it was defined and the values passed within itself. 
*/