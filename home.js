let url = "http://localhost:1702/city";
let hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  
            let text = document.createTextNode(data[i].city_name) 
            element.appendChild(text) 
            element.value = data[i]._id 
            document.getElementById('city').appendChild(element)
        }
    })
}

const getHotel = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
        }
    })
}


function changeMode(){
    var homeBody=document.body;
    homeBody.classList.toggle("changeDark");
}

