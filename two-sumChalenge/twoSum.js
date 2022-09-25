/*      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.       */


let arrayLength =Math.floor(Math.random()*20)
let numberArray=[]
let hash=[]
let target = Math.floor(Math.random()*10)

if(target=== 0){
  target += 1

}

if(arrayLength <= 4){
  arrayLength += 9

}

function creatingRandonArray(emptyArray){
   for (let i = 0; i < arrayLength; i++){
    let arrayItem =  Math.floor(Math.random()*10)
     let tester =emptyArray.find( element => element ===arrayItem)
     if(tester === undefined ){
        emptyArray.push(arrayItem)
     }
   }
}

function hashCreating(array,hash){
array.forEach((element, index)=>{
  hash.push({index: index, value: element})
})
}

function findingValues(hash, target){
  
}

creatingRandonArray(numberArray)
hashCreating(numberArray, hash)
findingValues(target)