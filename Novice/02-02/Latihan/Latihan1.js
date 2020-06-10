class kuliah {
    constructor(tugas, praktikum, teori) {
        this.teori = teori;
        this.praktikum = praktikum ;
        this.tugas = tugas;
    }

    getName () {
        return this.tugas + " " + this.praktikum;
    }

}

    class Pendidikan extends kuliah{
        getName(){
            return super.getName()+" Semangat Kuliah.";
        }
    }

    let pendidikan = new Pendidikan("SMART","SMILE");

console.log(pendidikan.getName());