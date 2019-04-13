const func = []

for (var i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2]()
func[8]()

/* 
* As var's scope is global, when you call the function within the array
* passing the index you want it will return only the lastest number assigned
* to i.
*/