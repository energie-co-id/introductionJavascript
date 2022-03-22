const reverseWord = (kalimat) => {
    return new Promise((resolve, reject) => {
        if (typeof(kalimat) != 'string') {
            reject(new Error('input harus string'))
        } else {
            let x = kalimat.toLowerCase()
            let hasil = x.split(" ").reverse().join(" ")
            resolve(hasil)
        }
    })
}

reverseWord('Saya Belajar Javascript')
    .then((result) => console.log(result))
    .catch((error) => console.log(error))