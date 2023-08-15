const API_KEY = "78c0f91ea6150dfc54d8698c8e218f64"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"
let lon,lat;

let city = document.getElementById('city')
let temp = document.getElementById('temp')
let Cname = document.getElementById('name')
let wind = document.getElementById('wind')
let pres = document.getElementById('pres')
let hum = document.getElementById('hum')
let img=document.getElementById('img')



function getcurrent(){
    navigator.geolocation.getCurrentPosition(async (result) => {
     const l = result.coords;
     lon = l.longitude;
     lat = l.latitude;
     console.log("lon:",lon,"lat:",lat);
     let data = await fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        console.log(data);

         if (data.status==200){ 
        //   console.log(await data.json())
          const info = await data.json();
          console.log(info);
          Cname.innerHTML=info.name;
          temp.innerHTML = info.main.temp;
          wind.innerHTML=info.wind.speed;
          img.src=`https://openweathermap.org/img/wn/${info.weather[0],icon}@2x.png`
          pres.innerHTML=info.main.pressure;
          hum.innerHTML=info.main.humidity
           }
       
    })
}



 async  function search()
{
    let data = await fetch(`${BASE_URL}weather?q=${city.value}&appid=${API_KEY}`);
    console.log(data);

     if (data.status==200){ 
    const info = await data.json();
    console.log(info);
    Cname.innerHTML=info.name;
    temp.innerHTML = info.main.temp;
    wind.innerHTML=info.wind.speed;
    pres.innerHTML=info.main.pressure;
    hum.innerHTML=info.main.humidity
     
 }
}
getcurrent()