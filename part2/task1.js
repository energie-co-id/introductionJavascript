let list = [{ metode: 'Filter', fungsi: 'Membuat array baru dengan setiap elemen dalam array yang lulus tes' },
    { metode: 'Find', fungsi: 'Mengembalikan nilai elemen pertama dalam larik yang lulus ujian' },
    { metode: 'Includes', fungsi: 'metode menentukan apakah array menyertakan nilai tertentu di antara entrinya' },
    { metode: 'Join', fungsi: 'Menggabungkan semua elemen array menjadi string' },
    { metode: 'map', fungsi: 'Membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array' },
    { metode: 'pop', fungsi: 'Menghapus elemen terakhir dari array, dan mengembalikan elemen itu' },
    { metode: 'push', fingsi: 'Menambahkan elemen baru ke akhir array, dan mengembalikan panjang baru' },
    { metode: 'reduce', fungsi: 'Kurangi nilai array menjadi nilai tunggal' },
    { metode: 'reverse', fungsi: 'Membalikkan urutan elemen dalam array' },
    { metode: 'splice', fungsi: 'Menambahkan/Menghapus elemen dari array' }
]
let listmetode = ['filter', 'find', 'includes', 'join', 'map', 'pop', 'push', 'reduce', 'reverse', 'splice']

function metode(x) {
    let cek = listmetode.includes(x); //proses apakah metode tersedia di list
    if (cek == false) {
        const z = listmetode.join(", ")
        return ("metode tidak tersedia di library " + "metode yang tersedia hanya: " + z)
    } else {
        const z = list.find(met => met.metode === x); //proses pencarian metode di list
        return (z)
    }
}
console.log(metode('toLowerCase'))