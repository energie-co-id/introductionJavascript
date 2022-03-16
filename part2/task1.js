let list = [{ metode: 'filter', fungsi: 'Creates a new array with every element in an array that pass a test' },
    { metode: 'find', fungsi: 'Returns the value of the first element in an array that pass a test' },
    { metode: 'from', fungsi: 'Creates an array from an object' },
    { metode: 'join', fungsi: 'Joins all elements of an array into a string' },
    { metode: 'map', fungsi: 'Creates a new array with the result of calling a function for each array element' },
    { metode: 'pop', fungsi: 'Removes the last element of an array, and returns that element' },
    { metode: 'push', fingsi: 'Adds new elements to the end of an array, and returns the new length' },
    { metode: 'reduce', fungsi: 'Reduce the values of an array to a single value' },
    { metode: 'reverse', fungsi: 'Reverses the order of the elements in an array' },
    { metode: 'splice', fungsi: 'Adds/Removes elements from an array' }
]
let listmetode = ['filter', 'find', 'from', 'join', 'map', 'pop', 'push', 'reduce', 'reverse', 'splice']

function metode(x) {
    let cek = listmetode.includes(x); //proses apakah metode tersedia di list
    if (cek == false) {
        return ("metode tidak tersedia di library")
    } else {
        const z = list.find(met => met.metode === x); //proses pencarian metode di list
        return (z)
    }
}
console.log(metode('splice'))