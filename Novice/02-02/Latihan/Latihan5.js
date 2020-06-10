class Animal {
    constructor(name) {
        this.name = name;
    }
    speak (){
        console.log(this.name, 'anjeng.');
    }  
 }

 class Dog extends Animal {
    speak(){
        console.log(this.name, 'chelsea.');
    }
 }

 let spot = new Dog('Anjeng');
 spot.speak();

 spot = new Animal('Chelsea');
 spot.speak();