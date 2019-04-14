var num = 1
{
    let num = 3
    console.log("Inside: ", num)
}
console.log("Outside: ", num)
/*
* A let variable is not only restricted between function and global
* scopes as var is. A let has it's scope restricted to blocks as well.
*/