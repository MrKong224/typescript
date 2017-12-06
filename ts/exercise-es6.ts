const multiple = (num:number, power:number) => num * power
console.log(multiple(10,2))

const greeting2 = (name:string = 'Max') => {console.log(`Hello ${name}`)}
greeting2()
greeting2('Kong')

const arrNum = [-3, 33, 38, 5]
console.log(Math.min(...arrNum))

function makeNewArry(...args:number[]){
    console.log(args)
}
makeNewArry(55,20)

let arrNum2 = [3.89, 2.99, 1.38]
let [re1,re2,re3] = arrNum2
console.log(re1,re2,re3)

let sciData = {firstName: "Will", experience: 12}
let {firstName:sciname, experience:sciexp} = sciData
console.log(sciname, sciexp)