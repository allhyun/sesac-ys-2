class Shape {
    constructor (widht,hight){
        this.widht = widht;
        this.hight = hight; 
    }
    getArea( ){
        return this.widht*this.hight;
    }
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());

class Rectangle extends Shape {
    constructor(widht,hight){
        super(widht,hight);
    }
    getArea2(){
        console.log(Math.sqrt((this.widht)*(this.widht)+(this.hight)*(this.hight)));
    }

}
let rec2 = new Rectangle (3,4);
rec2.getArea2();

class Triangle extends Shape {
    constructor(widht,hight){
        super(widht,hight);
    }

    getArea3() {
        console.log(this.widht*this.hight/2);
    }
}
let tri = new Triangle (3,4);
tri.getArea3();

class Circle extends Shape{
    constructor (widht,hight,radius){
        super(widht,hight);
        this.radius=radius;
    }

    getArea4(){
        console.log(this.radius*this.radius*3.14);
    }
}
let cir = new Circle (4,4,4);
cir.getArea4();