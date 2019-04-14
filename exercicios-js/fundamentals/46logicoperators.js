/*
* Imagine that you have two projects on a week to finish. If you finish
* both of them you will go shopping on the weekend for a tv of 50' and an
* ice cream. If you finish only one, you'll go shopping for a tv of 32' and
* an ice cream. But if you do not finish any of them, you'll stay home on 
* the weekend.
*/

function shopping(work1, work2){
    const buyIceCream = work1 || work2;
    const buyTv50 = work1 && work2;
    // const buyTv32 = (work1 && !work2) || (!work1 && work2) // xor expanded
    // const buyTv32 = !!(work1 ^ work2) //bitwise xor
    const buyTv32 = work1 != work2
    const healthy = !buyIceCream

    return {buyIceCream, buyTv32, buyTv50, healthy}
}

console.log(shopping(true, true))
console.log(shopping(false, true))
console.log(shopping(true, false))
console.log(shopping(false, false))