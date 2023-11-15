const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": "Yang termasuk bangun datar dibawah ini adalah...",
        "o": [
            'Kubus',
            'Balok',
            'Segitiga',
            'Bola',
        ],
        "a": 2
    },
    {
        "q": "Dibawah ini yang bukan merupakan bilangan prima adalah...",
        "o": [
            '3',
            '5',
            '7',
            '8',
        ],
        "a": 3 
    },
    {
        "q": "Dibawah ini yang termasuk nama bunga adalah...",
        "o": [
            'Apel',
            'Mawar',
            'Monyet',
            'Pisang',
        ],
        "a": 1 
    },

]

let nama = prompt('Input nama: ');

// Loop through each question
for (let i = 0; i < soal.length; i++) {
    console.log('\nSoal ' + (i + 1) + ': ' + soal[i].q);
    
    // Display answer choices
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(j + '. ' + soal[i].o[j]);
    }

    // Prompt user for an answer
    let jawaban = prompt('Jawaban Anda (masukkan angka pilihan): ');

    // Check if the answer is correct
    if (parseInt(jawaban) === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Anda salah. Jawaban yang benar adalah: ' + soal[i].o[soal[i].a]);
        jawaban_salah++;
    }
}
console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)



