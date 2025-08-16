const a = ["apple", "apricot", "nuts", "pineapple", "blackberries"];

class Person {
    private name: string;
    public constructor(name: string){
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(nume: string): void {
        this.name = nume;
    }
}

class Student extends Person {
    private age: number;
    public constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    public getData(): string {
        return this.getName() + " " + this.age;
    }
}

// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// a.forEach((item) => console.log(item));

// afiseaza concatenarea elementelor din param
function concatenare(param: string[]) : void {
    let cuv = "";
    param.forEach((item) => cuv = cuv + " " + item);
    cuv = cuv.trim();
    console.log(cuv);
}

concatenare(a);

let s1: Student = new Student("nume_1", 20);
console.log(s1.getData());


