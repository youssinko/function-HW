//1-(completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x,y){
    if( x > y){
        return x
    }else if (y > x){
        return y
    }else if (y === x){
        return y
    }

} console.log(maxOfTwoNumbers(9,8))
//-------------------
//2.Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(num1,num2,num3){
    if ( num1 > num2 && num1 > num3){
        return num1
    }else if( num2 > num1 && num2 > num3){
        return num2
    }else if( num3 > num1 && num3 > num2){
        return num3
    }

}
console.log(maxOfThree(1,3,5))
//----------------------------------
//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(letter){
    
    if (
         letter === 'a' || 
         letter === 'e' ||
         letter === 'i' || 
         letter === 'o' ||
         letter === 'u' 
         )
         {
        return true
    }else{
       return false
    }
}
console.log(isCharAVowel('b'))
//---------------------------
//4.Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = function(array){
    let sum = 0
    for (let i =0; i < array.length; i++){
 sum += array[i]

    }
    console.log(sum)
}
sumArray([2,4,5])
//................
//5.Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArraythat ( array1){
    let multiply = 1
    for ( let j=0 ; j < array1.length ; j ++){
        multiply *= array1[j]
    }
    console.log(multiply)
}
multiplyArraythat([2,4,5])
//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
const numArgsthat = function(...args){
    return args.length
}
console.log(numArgsthat(2,4,6,3,5,2))
//7.Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
function reverseStringthat (str){
    let stringArray = str.split('')
    let reverseArray= stringArray.reverse()
    let stringBack = reverseArray.join('')
    return stringBack
}
console.log(reverseStringthat('rockStar'))
//8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArraythat = function(stringArray) {
    let longest = 0;
for(let i = 0 ; i < stringArray.length; i++){
   if (stringArray[i].length > longest){
    longest=stringArray[i].length
   }
}

    return longest
}
let result= longestStringInArraythat(['hi','bye','lol','fantastic'])
console.log(result)
  


//9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
//function stringsLongerThanthat(arrayTwo)
function stringsLongerThan (StrArray,strLength){
    const newArry = []
   // console.log(StrArray,strLength)
    for (let i=0; i <StrArray.length; i++){
       if(StrArray[i].length > strLength){
         newArry.push(StrArray[i])
       }
    }
return newArry
}
console.log(stringsLongerThan(['rania','yousef','amir','shareif'],5))

    