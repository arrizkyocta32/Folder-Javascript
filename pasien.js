const name = 'Arrizky Octa Ferdiansyah';
const age = 26;
const Diagnosa = 'sick';

let pasien = {
    name : 'Arrizky Octa Ferdiansyah',
    age : 26,
    Diagnosa: 'sick',

    mystatus :{
        100:'Hospital Yasa Husada',
        bio : 'beratbadan dan tinggibadan',
        bodyweight : 79,
        bodyheight: 160,
        city: {
            name : 'West Jakarta',
            code :11750,
        }
    
    }
    

};

console.log(pasien);
console.log(pasien.Diagnosa);
console.log(pasien.mystatus);
console.log(pasien.mystatus.city.name);
console.log(pasien[100]);
pasien [100] = 'HarapanKita';
console.log(pasien[100]);
