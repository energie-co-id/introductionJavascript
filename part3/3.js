// //program 1
// // cek role hero Mobile Legend
// const cekHeroML = (hero) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let tank = ['tigreal', 'franko', 'jonson', 'uranus', 'kufra', 'lolita', 'gatot kaca', 'akai']
//             let marskman = ['laila', 'miya', 'wanwan', 'hanabi', 'brodi', 'betrix', 'granger', 'bruno', 'iritel']
//             let support = ['diggie', 'angela', 'kaja', 'rafaela', 'carmila', 'estes', 'mathilda', 'florin']
//             let cek1 = tank.find((item) => { return item === hero })
//             let cek2 = marskman.find((item) => { return item === hero })
//             let cek3 = support.find((item) => { return item === hero })
//             let hasil
//             if (cek1) {
//                 hasil = 'tank'
//             } else if (cek2) {
//                 hasil = 'marskman'
//             } else if (cek3) {
//                 hasil = 'support'
//             } else {
//                 reject(new Error('Hero belum ada di library'))
//             }
//             resolve(hasil)
//         }, 1000)
//     })
// }

// const cetakhasil = (hero, hasil) => {
//     setTimeout(() => {
//         console.log("hero " + hero + " memiliki role " + hasil)
//     }, 1000);
// }


// let hero = 'brodi'

// cekHeroML(hero)
//     .then((hasil) => cetakhasil(hero, hasil))
//     .catch((error) => console.log(error))


//.................................................................................................

// //program 2
// //main gunting batu kertas
const player1 = (num1) => new Promise((resolve, reject) => {
    let hasil1
    setTimeout(() => {
        if (typeof num1 !== "number") {
            reject(new Error("input harus angka !"))
        } else {
            if (num1 > 0.66) {
                hasil1 = "batu"
            } else if (num1 > 0.33) {
                hasil1 = "gunting"
            } else {
                hasil1 = "kertas"
            }
        }
        console.log("Player 1 = " + hasil1)
        resolve(hasil1)
    })
});

const player2 = (num2) => new Promise((resolve, reject) => {
    let hasil2
    setTimeout(() => {
        if (typeof num2 !== "number") {
            reject(new Error("input harus angka !"))
        } else {
            if (num2 > 0.66) {
                hasil2 = "batu"
            } else if (num2 > 0.33) {
                hasil2 = "gunting"
            } else {
                hasil2 = "kertas"
            }
        }
        console.log("Player 2 = " + hasil2)
        resolve(hasil2)
    })
});

const diadu = (hasil1, hasil2) => new Promise((resolve, reject) => {
    let pemenang
    setTimeout(() => {
        if (hasil1 == hasil2) {
            reject(new Error("Hasilnya Seri"))
        } else {
            let logika1 = ["kertas", "gunting", "batu"]
            let logika2 = ["batu", "kertas", "gunting"]
            let x = logika1.indexOf(hasil1)
            let y = logika1.indexOf(hasil2)
            let p = logika2.indexOf(hasil1)
            let q = logika2.indexOf(hasil2)
            if ((x - y) === 1 || (p - q) === 1) {
                pemenang = "pemenangnya adalah player 1"
            } else if ((y - x) === 1 || (q - p) === 1) {
                pemenang = "pemenangnya adalah player 2"
            } else { pemenang = "sulit ditentukan" }
        }
        console.log(pemenang)
        resolve(pemenang)
    }, 1000)

})


async function main() {
    try {
        let num1 = Math.random()
        let num2 = Math.random()
        const hasil1 = await player1(num1)
        const hasil2 = await player2(num2)
        await diadu(hasil1, hasil2)
    } catch (error) {
        console.log(error)
    }
}

main()