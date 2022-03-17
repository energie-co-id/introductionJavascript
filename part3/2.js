const getMonth = (callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            let month = [
                'Januari', 'Februari', 'Maret', 'April',
                'Mei', 'Juni', 'Juli', 'Agustus', 'September',
                'Oktober', 'November', 'Desember'
            ]
            if (!error) {
                callback(null, month)
            } else {
                callback(new Error('Sorry Data Not Found', []))
            }
        }, 4000)
    })
}

const showMonth = (x, month) => {

    setTimeout(() => {
        if (x == Error) {
            console.log(new Error('Sorry Datanya error'))
        } else if (month.length == 12) {
            month.map((value, index, arr) => {
                console.log(value)
            })
        } else {
            let y = 'month'
            console.log(new Error('Data tidak ditemukan'))
        }
    }, 1000)
}

getMonth((NaN, result) => {
    showMonth(result, result)
})