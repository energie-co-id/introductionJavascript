const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// const day = 'minggu'
//then,catch
//Fungsi dari then dan catch yaitu: 
// a. 'then' akan menghandle hasil eksekusi baik itu berhasil maupun gagal, 
// b. 'catch' akan menghandle bila terdapat error pada kode.
cekHariKerja(day).then((cek) => {
        console.log('hari ini hari ' + cek)
    })
    .catch((error) => { console.log(error) })

//try,catch
//Fungsi dari try dan catch yaitu:
// 'try' untuk menentukan blok kode yang akan diuji untuk kesalahan ketika sedang dijalankan.
// 'catch' untuk menentukan blok kode yang akan dieksekusi, jika terjadi kesalahan dalam blok try.
async function hari() {
    try {
        const day = 'senin'
        const cek = await cekHariKerja(day)
        console.log('hari ini hari ' + cek)
    } catch (error) {
        console.log(error)
    }
}
hari()