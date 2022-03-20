const cekPalindrom = (kata) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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
                resolve(console.log(hasil))
            }
        }, 1000)
    })
}


cekPalindrom('Malam')
    .catch((error) => console.log(error))