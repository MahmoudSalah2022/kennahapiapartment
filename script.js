// https://kennahstays.com/wp-content/themes/apartments.json
// fetch("apartments.json")
//     .then(response => response.json())
//     .then(apartments => {
//         apartments.forEach(apartment => {            
//             console.log(apartment.type + ' - ' + apartment.name)
//         });
//     })

// const data = require('./apartments.json');
// console.log(data);

// https://api.github.com/users/MahmoudSalah2022/repos
fetch ("https://kennahstays.com/wp-content/themes/apartments").then( (result)=> {
    console.log(result);
    let mydata = result.json();
    console.log(mydata)
})