const divideAndSort = (angka) => {
    return new Promise((resolve, reject) => {
        if (typeof(angka) != 'number') {
            reject(new Error('nilai input harus angka'))
        } else {
            let y = angka.toString().split('0')
            let hasil = []
            for (let i = 0; i < y.length; i++) {
                let x = y[i].split('').sort((a, b) => a - b).join('')
                hasil = hasil + x
            }
            resolve(hasil)
        }
    })
}

divideAndSort(5956560159466056)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))