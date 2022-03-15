//buatlah callback unction untuk menghitung luas dan keliling lingkaran

function hitung(r, callbackluas) {
    let phi
    if (r % 7 === 0) {
        phi = 22 / 7
    } else {
        phi = 3.14
    }
    callbackluas(phi, r)
}

function luas(phi, r) {
    let luas = phi * r * r
    console.log("luas = " + luas)
}
hitung(7, luas)