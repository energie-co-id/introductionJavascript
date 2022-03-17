const menentukanPhi = (r, callback) => {
    let phi
    setTimeout(() => {
        if (r % 7 === 0) {
            phi = 22 / 7
        } else {
            phi = 3.14
        }
        console.log("proses 1 mencari phi = " + phi)
        callback(phi, r)
    }, 2000);
}

const hitungLuas = (phi, r, callback) => {
    let luas
    setTimeout(() => {
        luas = phi * r * r
        console.log("proses 2 menghitung luas = " + luas)
        callback(luas)
    }, 1000);
}

const cetakLuas = (luas) => {
    setTimeout(() => {
        console.log("proses 3 mencetak luas = " + luas)
    }, 3000);
}

const r = 7
menentukanPhi(r, (phi, r) => {
    hitungLuas(phi, r, (luas) => {
        cetakLuas(luas)
    })
})