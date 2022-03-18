// const getData = () => {
//     const data = []
//     if (data.length > 0) {
//         return data
//     } else {
//         return new Error("Data tidak ada !")
//     }
// }
// console.log(getData())

// without function
// const getData = new Promise((resolve, reject) => {
//     const data = []
//     if (data.length > 0) {
//         // return data
//         resolve(data)
//     } else {
//         // return new Error("Data tidak ada !")
//         reject(new Error("Data tidak ada !"))
//     }
// })
// getData

// with function
// const getData = () => new Promise((resolve, reject) => {
//     const data = []
//     if (data.length > 0) {
//         // return data
//         resolve(data)
//     } else {
//         // return new Error("Data tidak ada !")
//         reject(new Error("Data tidak ada !"))
//     }
// })

// getData().then((result) => {
//     console.log(result)
//     result.map(item => console.log(item))
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Proses berakhir")
// })


// ===========================================================================
// handle asynchronous
const menentukanPhi = (r) => new Promise((resolve, reject) => {
    let phi
    setTimeout(() => {
        if (typeof r !== "number") {
            reject(new Error("Jari2 harus angka !"))
        } else {
            if (r % 7 === 0) {
                phi = 22 / 7
            } else {
                phi = 3.14
            }
            console.log("proses 1 mencari phi = " + phi)
            resolve(phi)
        }
    }, 2000);
})

const hitungLuas = (phi, r) => new Promise((resolve, reject) => {
    let luas
    setTimeout(() => {
        luas = phi * r * r
        console.log("proses 2 menghitung luas = " + luas)
        resolve(luas)
    }, 1000);
})

const cetakLuas = (luas) => {
    setTimeout(() => {
        console.log("proses 3 mencetak luas = " + luas)
    }, 4000);
}

// [1]
const r = "7"
menentukanPhi(r).then((phi) => {
    // result = phi
    hitungLuas(phi, r).then((luas) => {
        // result = luas
        cetakLuas(luas)
    })
})

// [2]
menentukanPhi(r)
    .then((phi) => hitungLuas(phi, r))
    .then((luas) => cetakLuas(luas))
    .catch((error) => console.log(error))