var people = [
    { name : "TK", age : 26},
    { name : "Kaio", age : 10},
    { name : "Kazumi", age : 19}
];

var peopleSentences = [];

for (var i = 0; i< people.length; i++){
    var sentences = people[i].name + " is " + people[i].age+ " years old";
    peopleSentences.push(sentences);
}

console.log(peopleSentences);