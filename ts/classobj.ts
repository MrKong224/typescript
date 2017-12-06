class Person{
    public name: string
    public email : string
    private type: string
    protected age: number

    constructor(name: string, public username: string){
        this.name = name
        this.age = 29
    }

    printAge(){
        console.log(this.age)
        this.setType("Old guy")
    }

    private setType(type:string){
        this.type = type
        console.log(this.type)
    }
}

const person = new Person("Kong","KingKong")
person.email = 'koong123@gmail.com'
console.log(person)
person.printAge()
// person.setType("Cool guy") this work as private function

// Inheritance
class Max extends Person{
    //name = "Max"
    constructor(usrname:string){
        super("Anna",usrname)
        this.age = 30
    }

}
const max = new Max("max123")
max.email = "max22@gmail.com"
console.log(max)

// Getters & Setters
class Plant {
    private _species: string = "default"
 
    set species(value: string){
        this._species = value
    }
    get species(){
        return this._species
    }
}

const pln = new Plant()
console.log(pln.species)
pln.species = "New tree"
console.log(pln.species)

// Static  Properties & Methods
class Helpers{
    static PI: number = 3.14
    static calCirm(diameter: number): number{
        return this.PI * diameter
    }
}
console.log(2*Helpers.PI)
console.log(Helpers.calCirm(8))

//Abstract Class
abstract class Project{
    projectname:string = "Default"
    budget:number = 1000

    abstract changePrjName(name: string): void

    calcBudget(){
        return this.budget * 2
    }
}

class ITProject extends Project{
    changePrjName(name:string){
        return this.projectname = name
    }
}

const prj = new ITProject()
console.log(prj)
prj.budget
prj.changePrjName("Super Project")
console.log(prj)

//Private constructor
class OnlyOne{
    private static instance: OnlyOne;
    private constructor(public name: string){}
    static getInstance(){
        if(!OnlyOne.getInstance){
            OnlyOne.instance = new OnlyOne('This is only one')
        }
        return OnlyOne.instance
    }   
}
let right = OnlyOne.getInstance()
console.log(right.name)


