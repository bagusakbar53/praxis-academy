class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }


get area (){
    return this.height * this.width;
}

set area(value) {
    this.area = value;
}
}

let s = new Square(5);

s.sayName();
ChromeSamples.log('The area off this' + s.area);
