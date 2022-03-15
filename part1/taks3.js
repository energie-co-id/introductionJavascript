let input = 5;
let num = parseInt(input);

input != num ? console.log("input harus bertype angka") : num <= 0 ? console.log("nilai harus positif") : "";

let number = []
let i = 1

while (num > -1) {
    number.push(i++);
    num--
}

let j = parseInt(input);

while (j > 0) {
    const removedItem = number.pop()
    console.log(number.join(' '));
    j--
}