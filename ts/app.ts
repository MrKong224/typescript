console.log('############# Hello Typescript World ######################')

//String
let myName:string = 'Nuttkorn'

//Number
let myNumber:number = 2.75
myNumber = 1

//Boolean
let isCorrect:boolean = true
isCorrect = false

//Any
let realAge:any
realAge = 30
realAge = 'Thrity'

//Arry
let hobbies: any[] = ["Cooking","Sports"]
//console.log(typeof hobbies + ' -- ' + hobbies[0] + ' -- ' + hobbies[1])

//tuples
let address: [string,number] = ["Superstreet",99]
//console.log(address[1])

//emun
enum grade {
    F, 
    D,
    E,
    B,
    A
}
let studentgrade:grade = grade.A
//console.log(studentgrade)

//any
let car: any = "BMW"
//console.log(car)
car = {brand:"TOYOTA",series:"3"} 
//console.log(car)

//functions 
function returnMyName(): string{
 return myName
}
function SayHello(): void{
    console.log("Hello no return")
}

//argument types
function multiply(value1:number,value2:number): number{
 return value1 * value2
}
//console.log(multiply(2,3))

let voidFunc = SayHello
voidFunc()

let myMulti: (val1:number,val2:number) => number
myMulti = multiply
console.log(myMulti(5,2))

//object
let userData:{
    name: string,
    age: number,
    email: string
}
userData = {
    name: "KingKong",
    age: 29,
    email: "abc@gmail.com"
}
console.log(userData.name)

//Custom type
type Complex = {data:number[],output:(all:boolean)=> number[]}
let complex2:Complex = {
    data: [1,2,3],
    output: function(all: boolean): number[]{
        let d = all
        return this.data
    }
}

//union type
let temp: number | string | boolean
temp = 20
temp = "20"
temp = false

//check type
let finalValue = "A string"
if(typeof finalValue == "string"){
    console.log("The finalValue is string")
}

//never
function neverFunc():never{
    throw new Error('An error!')
}
neverFunc()

//Nullable types
let canBeNull: number | null = 12
canBeNull = null
canBeNull = 15
let canAlsoBeNull
canAlsoBeNull = null
canAlsoBeNull = 12