var holla = {
    type: '',
    getType: function(){return this.type; }

 };

 function Triangle(a, b, c){
     this.type = 'triangle';
     this.a = a;
     this.b = b;
     this.c = c;
 }

 Triangle.prototype = holla;
 Triangle.prototype.getPerimeter = function() {
     return this.a + this.b + this.c;
 };
 Triangle.prototype.constructor = Triangle;