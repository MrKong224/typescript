console.log("################ let and const ###################")
let variable = "value"
variable = "another value"
console.log(variable)

const maxval = 500
console.log(maxval)

//Block scope
function reset(){
    let variable = null
    console.log(variable)
}
reset()
console.log(variable)

console.log("################ Arrow function ##################")
const addNumber = (val1:number,val2:number) => {
   return (val1 + val2)
}
console.log(addNumber(10,20))

const multipleNumber = (number1:number, number2:number) => {
    let req = number1 * number2
    return req
}
console.log(multipleNumber(10,40))

const devideNumber = (value1:number, value2:number) => value1 / value2
console.log(devideNumber(10,2))

const greet = () => {
    console.log("Hello !!!")
}

const greetFriend = friendName => { console.log("Hello " + friendName) }
greetFriend("Liver")

//Default parameter
const countDown = (start:number = 10): void => {
    console.log(start)
    while(start>0){
        start--
    }
    console.log("Done !! ", start)
}
countDown()
countDown(20) 

//Rest and spread
console.log("################### Rest and Spread ####################")
const arrNumber = [1,8,9,50,-9]
console.log(Math.max(1,8,9,50,-9))
console.log(Math.max(...arrNumber))

console.log("################### Make Array  ####################")
function makeArray(method:string, ...args:number[]){
    console.log(...args)
    console.log(method)
    console.log(args)
    return args
}
makeArray("makearray",1,2,3,4,5)

console.log("################### Destructuring  ####################")
const myHobbies = ['cooking','sports']
const [hobby1,hobby2] = myHobbies
console.log(hobby1,hobby2)

const custData = {userName: "Kong", age: 29}
const {userName:myName2, age:myAge} = custData
console.log(myName2,myAge)

console.log("################### Template Literals  ####################")
const userName = "Kong"
const greeting = `Hello
I'm ${userName}. 
I'm web developer`
console.log(greeting)



