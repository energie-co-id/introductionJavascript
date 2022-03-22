const cekPalindrom = (kata) => {
    return new Promise((resolve, reject) => {
        if (typeof(kata) != 'string') {
            reject(new Error('input harus string'))
        } else {
            let x = kata.toLowerCase()
            let y = x.split("").reverse().join("")
            let hasil
            if (x === y) {
                hasil = "Palindrom"
            } else {
                hasil = "Bukan Palindrom"
            }
            resolve(hasil)
        }
    })
}


cekPalindrom('malam')
    .then((result) => console.log(result))
    .catch((error) => console.log(error))