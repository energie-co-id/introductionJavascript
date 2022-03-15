let hasilArray = []
let hasil

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal > nilaiAkhir) {
        hasil = "Nilai akhir harus lebih besar dari nilai awal"
    } else if (dataArray.length < 5) {
        hasil = "Jumlah angka dalam dataArray harus lebih dari 5"
    } else {
        for (let i = 0; i <= dataArray.length - 1; i++) {
            if (nilaiAwal <= dataArray[i] && nilaiAkhir >= dataArray[i]) {
                hasilArray.push(dataArray[i])
                hasil = hasilArray
            } else if (hasilArray.length == 0) {
                hasil = "Nilai tidak ditemukan"
            } else { "" }
        }
    }
    return (hasil)
}
console.log(SeleksiNilai(4, 5, [2, 1, 6, 6, 20]))