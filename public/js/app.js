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
    const url="http://api.weatherstack.com/current?access_key=637bebc0385f89c8cb879d2dfe379974&query="+search.value+"&units=m"
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                document.getElementById('msg1').innerHTML="Please eneter a valid place"
                
                
            }
            else{
                document.getElementById("msg1").innerHTML=data.location.name +", "+data.location.region+
                ", "+ data.location.country+"<br/>Temperature is => "+ data.current.temperature+
                "<br /> Feels Like => "+data.current.feelslike +"<br /> Weather Description => "+ 
                data.current.weather_descriptions[0]+ " <br /> Wind Speed => " +
                data.current.wind_speed+" <br /> Visibility => "+data.current.visibility ;
                
            }
        })
    })

})