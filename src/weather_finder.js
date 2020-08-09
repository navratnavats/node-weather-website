const request=require("request")

const weather=(search,callback)=>{
    const key='637bebc0385f89c8cb879d2dfe379974'
    const url='http://api.weatherstack.com/current?access_key='+key+'&query='+encodeURIComponent(search)+'&units=m'
    request({url:url,json:true},(error,res)=>{
        if(error){
            callback("Unable to connect",undefined)
        }
        else if(res.body.error){
            callback("Unable to find location!!",undefined)
        }
        else{
            callback(undefined,{
                temperature:res.body.current.temperature,
                feelslike:res.body.current.feelslike,
                weather_descriptions:res.body.current.weather_descriptions,
                lati:res.body.location.lat,
                longi:res.body.location.lon,
                name:res.body.location.name,
                region:res.body.location.region,
                country:res.body.location.country,
                visibility:res.body.current.visibility,
                wind_speed:res.body.current.wind_speed,
                humidity:res.body.current.humidity,
                cloudcover:res.body.current.cloudcover

            })
        }
    })
}

module.exports=weather