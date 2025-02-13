// const url="http://api.weatherstack.com/current?access_key=637bebc0385f89c8cb879d2dfe379974&query=!!!&units=m"
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

const weatherformdata=document.querySelector('form')
const search=document.querySelector("input")
weatherformdata.addEventListener('submit', (e)=>{
    e.preventDefault()
    document.getElementById('msg1').innerHTML="Loading.."
    const url="/weather?address="+search.value;;
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                document.getElementById('msg1').textContent=data.error
            }
            else{
                document.getElementById("msg1").innerHTML=data.name +", "+data.region+
                ", "+ data.country+"<br/>Temperature is => "+ data.temperature+
                "C<br /> Feels Like => "+data.feelslike +"C<br /> Weather Description => "+ 
                data.weather_descriptions+ " <br /> Visibility => " +
                data.visibility+"km <br /> Wind Speed => "+data.wind_speed +"km/hr <br /> Humidity is => "+ 
                data.humidity+"% <br/> Cloud Cover is => "+data.cloudcover+"%";
                
            }
        })
    })

})