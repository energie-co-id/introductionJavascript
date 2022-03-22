const FazzFood = (harga, vocher, jarak, pajak) => {
    return new Promise((resolve, reject) => {
        if (typeof(harga) != 'number' || typeof(vocher) != 'string' || typeof(jarak) != 'number' || typeof(pajak) != 'boolean') {
            reject(new Error('input tidak sesuai'))
        } else {
            let potongan //menghitung discount
            if (vocher === 'FAZZFOOD50' && harga >= 50000) {
                potongan = harga * 0.5
                potongan >= 50000 ? potongan = 50000 : ""
            } else if (vocher === 'DITRAKTIR60' && harga >= 25000) {
                potongan = harga * 0.6
                potongan >= 30000 ? potongan = 30000 : ""
            } else {
                potongan = 0
                console.log("kupon tidak tersedia atau tidak memenuhi syarat")
            }
            let Jarak = 5000 + (jarak - 2) * 3000 //menghitung ongkos kirim
            Jarak <= 5000 ? Jarak = 5000 : ""
            let Pajak //menghitung pajak
            pajak = true ? Pajak = harga * 0.05 : Pajak = 0
            let SubTotal = harga - potongan + Jarak + Pajak
            resolve(console.log(
                'Harga : ' + harga + '\n' +
                'Potongan : ' + potongan + '\n' +
                'Biaya Antar : ' + Jarak + '\n' +
                'Pajak : ' + Pajak + '\n' +
                'Sub Total : ' + SubTotal))
        }
    })
}


FazzFood(30000, 'FAZZFOOD50', 5, true)
    .then((result) => result)
    .catch((error) => console.log(error))