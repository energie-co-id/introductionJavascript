const reverseWord = (kalimat) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(kalimat) != 'string') {
                reject(new Error('input harus string'))
            } else {
                let x = kalimat.toLowerCase()
                let hasil = x.split(" ").reverse().join(" ")
                console.log(hasil)
                resolve(hasil)
            }
        }, 1000)
    })
}

reverseWord('Saya Belajar Javascript')
    .catch((error) => console.log(error))