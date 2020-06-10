class kucing {
    constructor(nama, kelelahan, kelaparan, kebahagiaan, kesepian){
        this.nama = nama ;
        this.kebahagiaan = kebahagiaan;
        this.kelaparan = kelaparan;
        this.kesepian = kesepian;
        this.kelelahan = kelelahan;
    }
    makan (banyak) {
        this.kelaparan += banyak
        return `${this.nama} Kenyang.`
    }
    tidur(lama){
        this.kelelahan += lama
        this.kelaparan +=lama
        return `${this.nama} tidak ngantuk`
    }
    elus(seneng){
        this.kesepian -= happy
        if (this.kelelahan > 30) {
            return  `${this.nama} tidak ingin diganggu`
        } else {
            return`${this.nama} jadi seneng`
        }
    }
    main(main){
        this.kelelahan += main
        this.kebahagiaan += main
        return`${this.nama} mulai lelah ${this.nama} mulai senang`
    }

}
let hugo = new kucing(`hugo`, 10, 20, 30, 20)
console.log('hugo');