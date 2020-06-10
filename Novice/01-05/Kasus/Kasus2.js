function kamus() {

    let kamus = new Map([
        ['run', 'lari']
        ['eat', 'makan']
        ['work', 'kerja']
    ]);
    console.log(kamus);
    var a = prompt("Masukkan : ");
    var b = prompt("Masukkan : ");

 
    
    kamus.set(a,b);

    alert(kamus.get(a));
    console.log(kamus);

}
kamus();

function cari_kata() {
    var a = document.getElementById('demo').value;
    var kata = new Map([
        ['run', 'lari']
        ['eat', '']
    ]);


alert(kata.get(a));
}
cari_kata();