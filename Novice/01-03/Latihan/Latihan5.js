function* generator(i) {
    yield i;
    yield i + 20;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 30

console.log(gen.next().value);
// expected output: 20