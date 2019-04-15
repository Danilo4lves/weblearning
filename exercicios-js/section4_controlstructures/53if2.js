function test(num){
    if (num >= 7) // If you do not keys {} to hold the blocks, it will run only one line
        console.log(num)
    console.log("Final!")
}

test(6)
test(8)

function test2(num){
    if (num >= 7);{ // Careful with ;
        console.log(num)
    }
}

test2(6)
test2(8)