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
                callback(new Error('Sorry Data Not Found'), [])
            }
        }, 4000)
    })
}

const showMonth = (isError, data) => {
    setTimeout(() => {
        if (isError != null) {
            console.log(isError)
        } else {
            data.map((value, index, arr) => {
                console.log(value)
            })
        }
    }, 1000)
}

getMonth(showMonth)