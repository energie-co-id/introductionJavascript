const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
const list = ['a', 'b', 'c']

let hasil = []

//array mana yang mau dipakai
function array(x) {
    return (x)
}

function searchName(inis, max, callback) {
    let tmp = callback.join('~').toLowerCase(); //menjadikan sting di array menjadi huruf kecil
    let Array = tmp.split('~');
    for (let i = 0; i < callback.length - 1; i++) {
        let y = Array[i];
        let cari = y.includes(inis); //proses mencari inis di setiap string
        cari == true ? hasil.push(callback[i]) : ""; //proses memasukan sting yang benar ke array
        if (hasil.length >= max) break; //proses pemberhentian pencarian kata maksimal yang dicari
    }
    hasil.length == 0 ? hasil = "hasil tidak ditemukan" : ""; //proses jika inisial tidak ditemukan
    return (hasil)
}
console.log(searchName('a', 2, array(list)))