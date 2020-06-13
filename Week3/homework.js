//complete the work below labeled assignemtn and commit it to your repository
function test(actual, expected, testName){
    if(expected === actual){
        console.log(`TEST ${testName} PASSED`)
    }
    else{
        console.log(`TEST ${testName} Failed`)
        console.log(`   expected '${expected}' but was '${actual}' `)
    }
}


//exercise 1
function isUpper(myChar){
    let result = false;
    if(myChar.charCodeAt() >= 65 && myChar.charCodeAt() <=90){
      result = true
    }
    
    return result;
}

test(isUpper('A'), true, "IsUpper 1")
test(isUpper('M'), true, "IsUpper 2")
test(isUpper('Z'), true, "IsUpper 3")
test(isUpper('1'), false, "IsUpper 4")
test(isUpper('a'), false, "IsUpper 5")
test(isUpper('m'), false, "IsUpper 6")
test(isUpper('m'), false, "IsUpper 7")


//exercise 2
function isLower(myChar){
    
    let result = false;
    if(myChar.charCodeAt() >= 97 && myChar.charCodeAt() <= 122){
      result = true
    }
    
    return result;

}

test(isLower('A'), false, "IsLower 1")
test(isLower('M'), false, "IsLower 2")
test(isLower('Z'), false, "IsLower 3")
test(isLower('1'), false, "IsLower 4")
test(isLower('a'), true, "IsLower 5")
test(isLower('m'), true, "IsLower 6")
test(isLower('z'), true, "IsLower 7")


//exercise 3
//convert the character to lower case
//
function toLowerCase(myChar){
    let newChar = myChar;
    newChar = newChar.toLowerCase()
    return newChar;
}

test(toLowerCase('A'), 'a', "toLower 1")
test(toLowerCase('Z'), 'z', "toLower 2")
test(toLowerCase('1'), '1', "toLower 3")
test(toLowerCase('a'), 'a', "toLower 4")
test(toLowerCase('m'), 'm', "toLower 5")
test(toLowerCase('z'), 'z', "toLower 6")

//exercise 4
//print the array using a for loop
function printArray(myArray){
    for(let i = 0; i < myArray.length; i++){
        console.log(myArray)
    }
}

//exercise 5
//Print the array as a string
//do not change the array but print it as a string
//do not use any array methods
function printArrayAsString(myArray){
    for(let i = 0; i < myArray.length; i++){
        myString += myArray[i]
    }
    return myString
}


//exercise 6
//assume you have a non-empty array
//of number values
//return but do not print the array
//e.g. [1,2,4,5] returns "1,2,3,4,5"
//do not use any array methods
//
function convertArrayToString(myArray){
    let stringThing = ""
    for(let i = 0; i < myArray.length; i++){
        stringThing = stringThing + "," + myArray[i]
    }
    
    stringThing = stringThing.substring(1)
    return stringThing

}

test(convertArrayToString([1,2,3,4,5]), '1,2,3,4,5', "convertArrayToString 1")
test(convertArrayToString([1]), '1', "convertArrayToString 2")


//exercise 7
//return the lastElement in the array
function getLastElement(myArray){
    let varToReturn = myArray[myArray.length-1]
    return varToReturn
}
test(getLastElement([1]), 1, "getLastElement 1")
test(getLastElement([1,2,,3]), 3, "getLastElement 2")

//exercise 8
//check if an array contains a value
//return true if found
//return false otherwise
//assume there is not an empty array
//assume the values are all integers
//hit use for loops
function containsValue(myArray, value){
    let flagOfTruth = false
    for(let i = 0 ; i< myArray.length; i++){
        if(myArray[i] === value){
            flagOfTruth = true
        }
    }
    return flagOfTruth
}
test(containsValue([1,2,3], 1), true, "containsValue 1")
test(containsValue([1,2,,3], 2), true, "containsValue 2")
test(containsValue([1,2,,3], 3), true, "containsValue 3")
test(containsValue([1,2,,3], 4), false, "containsValue 4")
test(containsValue([1,2,,3], '2'), false, "containsValue 5")



//exercise 9
//copy the values from myArray 
//into the target array
//assume the target array has a legnth of
//zero
function copyArray(myArray, targetArray){
    for(let i = 0; i < myArray.length; i++){
        targetArray[i] = myArray[i]
    }
    return targetArray
}

let a1 = [1,3,5,8]
let a2 = []
copyArray(a1, a2)
test(a2[0], 1, "copyArray 1")
test(a2[3], 8, "copyArray 2")



//write a loops that prints all
//the numbers from 0 to 1000
//only print the numbers divisible by 30
for(let i = 0; i <= 1000; i++){
    let someArray = []
    if(i % 30 == 0){
      someArray.push(i)
    }
    let prettyString = ""
    for(let i = 0; i < someArray.length; i++){
        console.log(someArray[i])
    }
  }

//write a for loop that prints the following
//shape
//    *
//    * *
//    * * *
//    * * * * 
let x = ['*']
for(let i = 0; i < 4; i++){
    console.log(x)    
    x.push('*')
  
}

//write a for loop that prints the following shape
//        *
//       ***
//      *****
//     *******
let space = "";
for(let i=1;i<=4;i++){
  space = "";
  for(let j=i;j<4;j++){
    space += " ";
  }
  for(let k=0;k<(i*2)-1;k++){
    space += "*";
  }
  console.log(space);
}

//exercise 10
//BONUS points
//write a function name fizzBuzz
//for integers divisible by 3 return "fizz"
//for integers divisible by 5 return "buzz"
//for integers divisible by 3 and 5 and return "fizz buzz"
//only print one of the values based on the conditions
//hint use the mod operator %
//for integers not divisible by either 3 or 5 return empty string
function fizzBuzz(val){
    if(val % 3 == 0 && val % 5 == 0){
        return('fizz buzz')
    }
    else if(val % 3 == 0){
        return('fizz')
    }
    else if(val % 5 == 0){
      return('buzz')
    }
  else{
      return('')
  }
}

test(fizzBuzz(3), "fizz", "fizzBuzz 1")
test(fizzBuzz(5), "buzz", "fizzBuzz 2")
test(fizzBuzz(15), "fizz buzz", "fizzBuzz 3")
test(fizzBuzz(2), "", "fizzBuzz 4")
//test2








