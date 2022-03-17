// SYNCHRONOUS
// console.log("Input")
// console.log("Proses")
// console.log("Output")

// ASYNCHRONOUS
// setTimeout(() => {
//     console.log("Input")
// }, 1000)

// setTimeout(() => {
//     console.log("Proses")
// }, 3000)

// setTimeout(() => {
//     console.log("Output")
// }, 2000)

// =============================================================================

const menentukanPhi = (r) => {
    let phi
    setTimeout(() => {
        if (r % 7 === 0) {
            phi = 22 / 7
        } else {
            phi = 3.14
        }
        console.log("proses 1 mencari phi = " + phi)
        return phi
    }, 2000);
}

const hitungLuas = (phi, r) => {
    let luas
    setTimeout(() => {
        luas = phi * r * r
        console.log("proses 2 menghitung luas = " + luas)
        return luas
    }, 4000);
}

const cetakLuas = (luas) => {
    setTimeout(() => {
        console.log("proses 3 mencetak luas = " + luas)
    }, 3000);
}

const r = 7
const phi = menentukanPhi(r)
const luas = hitungLuas(phi, r)
cetakLuas(luas)