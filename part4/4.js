const divideAndSort = (angka) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(angka) != 'number') {
                reject(new Error('nilai input harus angka'))
            } else {
                let y = angka.toString().split('0')
                let hasil = []
                for (let i = 0; i < y.length; i++) {
                    let x = y[i].split('').sort((a, b) => a - b).join('')
                    hasil = hasil + x
                }
                resolve(console.log(hasil))
            }
        }, 1000)
    })
}

divideAndSort(5956560159466056)
    .catch((error) => console.log(error))