fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(user) {
        let hasil = []
        user.forEach((e) => {
            hasil.push({ name: e['name'] })
        })
        console.log(hasil)
    })