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
                callback('Sorry Data Not Found', [])
            }
        }, 4000)
    })
}

const showMonth = (data) => {
    setTimeout(() => {
        if (data.length == 0) {
            console.log(new Error('Sorry Datanya error'))
        } else if (data.length == 12) {
            data.map((value, index, arr) => {
                console.log(value)
            })
        }
    }, 1000)
}

getMonth((NaN, data) => {
    showMonth(data)
})