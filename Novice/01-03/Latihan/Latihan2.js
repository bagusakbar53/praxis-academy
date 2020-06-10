function myFunc(theObject) {
  theObject.brand = "Apple";
}

var myphone= {
  brand: "Apple",
  model: "IPhone 6 S",
  year: 2016
};

console.log(myphone.brand);

myFunc(myphone);