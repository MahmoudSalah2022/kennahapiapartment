
var apartmentdata = document.querySelector('.apartment');
var typedata = document.querySelector('.type');
let room_type;
fetch("./apartments.json")
    .then(response => response.json())
    .then(apartments => {
        apartments.forEach(apartment => {
            let apartmentLink = window.location.href.substring(window.location.href.lastIndexOf('/') + 1).slice(0,-5);
            if(apartmentLink === apartment.name){
                typedata.innerHTML = apartment.type
            }
        });
    })

    // const form = document.getElementById('form');

    // form.addEventListener('submit', function(e) {
    //     // Prevent default behavior:
    //     e.preventDefault();
    //     // Create new FormData object:
    //     const formData = new FormData(form);
    //     // Convert formData object to URL-encoded string:
    //     const payload = new URLSearchParams(formData);
    //     // Post the payload using Fetch:
    //     fetch('./apartments.json', {
    //     method: 'POST',
    //     body: payload,
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // })
function savedataintojson() {

    const fs = require('fs')

    const data = JSON.parse(fs.readFileSync('apartments.json'));

    const saveDate = (data, file) => {
        const finished = (error) =>{
            if(error){
                console.error(error);
                return;
            }
        }

        const jsonData = JSON.stringify(data, null, 2)
        fs.writeFile(file,jsonData,finished)
        console.log('saved');
    }

    const apartment = {
        name: 'joe',
        type: 5,
    }

    const saveApartment = (apartment) => {
        const newApartment = {
            name: apartment.name,
            type: apartment.typr,
        }

        data[apartment] = newApartment
        saveDate(data, 'apartments.json')
    }

    saveApartment(apartment);

}

savedataintojson();