// Declaration
// function additional(){
// kondisi, loop, dan masih banyak hal lain yang bisa diterapkan

// Case 1 Dont put return in loop
// for(let i = 0; i <= 5; i++){
//     console.log(i)
//     return i
// }

// Case 2 Jika proses belum sampai benar2 selesai jangan meletakkan return
// const r = 7
// const luas = 3.14 * r * r
// return luas
// const keliling = 2 * 3.14 * r
// return keliling 

// const x = 10
// if (typeof x === "String") {
//     // console.log("Nilai Ber tipe data string")
//     return "Nilai Ber tipe data string"
// }
// // console.log("Nilai Bukan Bertipe String")
// return "Nilai Bukan Bertipe String"
// }

// additional()

// Expression
// const additional = function(){
// // console.log(1 + 2)
// const x = 1
// const y = 2
// // return {x: x, y: y}
// return {x, y}
// }

// const text = `Hasil penjumlahan antara 1 + 2 = ${additional()}`
// console.log(text)

// Expression Arrow Function
const biodata = (name, age) => {
    console.log(`Nama Saya ${name} umur saya ${age}`)
}

biodata("Bagus", 17)

// const biodata = {
//     firstName: "Bagus",
//     lastName: "Tri",
//     fullName: function(){
//         const setName = this.firstName + this.lastName
//         return setName
//     }
// }
// console.log(biodata.fullName())


const reverseWord = ["Saya", "Belajar", "Javascript"]
    // console.log(reverseWord.toString())

// let result = ""
// for(let i=reverseWord.length-1; i>=0; i--){
//     // console.log(reverseWord[i])
//     result += reverseWord[i]
// }
// console.log(result)

// const result = reverseWord.reverse().join(" ")
// console.log(result)