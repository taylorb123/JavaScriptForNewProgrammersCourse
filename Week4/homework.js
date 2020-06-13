//create a function name myFilter
//that takes an array and filters by conditon
// funcion myFilter(myArray, callBack){
    
// }
let names = ["homer", "bart", "marge", "list"]
console.log(names.sort(function(a,b){
    let x = a.toLocaleLowerCase()
        y = b.toLocaleLowerCase()
    if(x < y){
        return -1
    }
    if(y < x){
        return 1
    }
    return 0
}))


let filteredNames = myFilter(names, 
    function(item){
    return item.localeCompare("homer") != 0
})

let ages = [11,13,30,42]

let evenAges = myFilter(ages, function(item){
    item % 2 == 0;
})      