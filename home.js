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

let Geolocation=()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("GeoLocation not supported.")
    }

}

let showPosition=(data)=>{
    let x = document.getElementById('weather');
    let y = document.getElementById('degreeCel');
    let z =  document.getElementById('weatherIcon');
    let lon=data.coords.longitude;
    let lat=data.coords.latitude;
    console.log(data);
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
   
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.list.map((item)=>{
            console.log(item.temp.day)
            x.innerText=`${item.temp.day} `;
            y.innerHTML=`<img src="images/degreeCel.png" alt="degreeCel" style="height:22px; margin-top:-49%"/>`
            z.innerHTML=`<img src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather' style="margin-left:-22%"/>`
        })
        
    })
}
Geolocation();