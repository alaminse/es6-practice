class Parents{
    constructor(){
        this.fatherName = "Alamin";
    }
    fullName(){
        return this.name +" "+ this.fatherName;
    }
}
class Child extends Parents{
    constructor(name){
        super();
        this.name=name;
    }
}
const baby = new Child("Khalid");
const baby2 = new Child("Tom");
console.log(baby.fullName())
console.log(baby2)