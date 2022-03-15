const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
let hasil = []
const list = ['a', 'b', 'c']

function array(x) {
    return (x)
}

function searchname(inis, max, callback) {
    let tmp = callback.join('~').toLowerCase();
    let Array = tmp.split('~');
    let i = 0
    for (let i = 0; i < callback.length - 1; i++) {
        let x = Array[i];
        let cari = x.includes(inis);
        cari == true ? hasil.push(callback[i]) : "";
        if (hasil.length >= max) break;
    }
    return (hasil)
}
console.log(searchname('a', 3, array(name)))