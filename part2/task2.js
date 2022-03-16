const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
const list = ['a', 'b', 'c']

let hasil = []

function array(x) {
    return (x)
}

function searchname(inis, max, callback) {
    let tmp = callback.join('~').toLowerCase();
    let Array = tmp.split('~');
    for (let i = 0; i < callback.length - 1; i++) {
        let y = Array[i];
        let cari = y.includes(inis);
        cari == true ? hasil.push(callback[i]) : "";
        if (hasil.length >= max) break;
    }
    return (hasil)
}
console.log(searchname('an', 2, array(name)))