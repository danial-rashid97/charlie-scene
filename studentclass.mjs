//Student class (export)
class Student{
    constructor(name,matricno, major){
    this.name=name;
    this.matricno=matricno;
    this.major= major;
    }
    get Name(){
    return this.name;
    }
    get Matricno(){
    return this.matricno;
    }
    get Major(){
    return this.major; 
    }
    set Name(name){
    this.name;
    }
    set Matricno(matricno){
    this.matricno;
    }
    set Major(major){
    this.major;
    }
    main(){
        console.log(`Name       : ${this.name}`);
        console.log(`Matric No. : ${this.matricno}`);
        console.log(`Major      : ${this.major}`);
    }
}
export{Student}   //exports.module={Student} for js
