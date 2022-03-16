let hasilArray = [] //yang dijadikan hasil pencarian
let hasil //yang dijadikan return

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal > nilaiAkhir) { //filter jika nilai awal lebih besar dari nilai akhir
        hasil = "Nilai akhir harus lebih besar dari nilai awal"
    } else if (dataArray.length < 5) { //filter jika panjang array kurang dari 5
        hasil = "Jumlah angka dalam dataArray harus lebih dari 5"
    } else {
        for (let i = 0; i <= dataArray.length - 1; i++) { //proses pencarian
            if (nilaiAwal <= dataArray[i] && nilaiAkhir >= dataArray[i]) {
                hasilArray.push(dataArray[i])
                hasil = hasilArray
            } else if (hasilArray.length == 0) { //jika tidak ada angka yang tepat pada array
                hasil = "Nilai tidak ditemukan"
            } else { "" }
        }
    }
    return (hasil)
}
console.log(SeleksiNilai(4, 5, [2, 1, 6, 6, 20]))