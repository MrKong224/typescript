class Car{
    public name: string
    public acceleration: number = 0

    constructor(name:string){
        this.name = name
    }

    setAcceleration(acceleration:number){
        this.acceleration = acceleration
    }

    honk(){
        console.log("Toooooooooo!")
    }
    
    addSpeed(speed:number){
        this.acceleration = this.acceleration + speed
    }
}

const aCar = new Car("BMW")
aCar.acceleration = 100
console.log(aCar)
aCar.honk()
aCar.addSpeed(100)
console.log(aCar)

class rectangle{
    public width: number
    public length: number
    calSize(){
        return this.width*this.length
    }
}
const rect = new rectangle()
rect.width = 10
rect.length = 20
let size = rect.calSize()
console.log(size)

class person2{
    private _firstname:string = ""
    
    set firstname(value:string){
        if(value.length > 3){
            this._firstname = value
        }        
    }
    get firstname(){
        return this._firstname
    }
}
const pers = new person2()
console.log(pers.firstname)
pers.firstname = "May"
console.log(pers.firstname)
pers.firstname = "KingKong"
console.log(pers.firstname)

