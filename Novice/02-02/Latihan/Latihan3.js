function ayoo(kamu, aku) {
    this.kamu = kamu;
    this.aku = aku;
    
}

ayoo.prototype.greet = function() {
    return `${this.kamu} says hello.`;
}

let ayoo2 = new ayoo('siapa','bagus');
console.log(ayoo2.greet());
console.log(ayoo2);