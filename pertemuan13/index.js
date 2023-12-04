// Class in JS
//------------


//objek literal
// const mobil = {
//     transmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.tranmisi} dinyalakan`)
//     },
// };

// const mobil2 = {
//     transmisi: "automatic",
//     bahanBakar: "solar",
//     mesin: 2000,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.tranmisi} dinyalakan`)
//     },
// };

class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin () {
        console.log(`Mobil ${this.transmisi} dinyalakan`)
    }
}

const mobil1 = new Mobil("Manual", "bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("automatic", "solar", 2000);
mobil2.nyalakanMesin();


class Toyota extends Mobil{
    constructor(transmisi, bahanBakar, mesin, merk, warna){
        super(transmisi, bahanBakar, mesin)
        this.merk = merk;
        this.warna = warna;
    }
    nyalakanMesin(){
        console.log(`Mobil ${this.merk} dinyalakan`)
    }
}

const agya = new Toyota("automatic", "bensin", 1000,"Agya", "putih");
agya.nyalakanMesin();
console.log(agya);