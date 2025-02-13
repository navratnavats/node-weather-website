const path = require('path')
const express = require('express')
const hbs=require('hbs')
const finder=require("./weather_finder")


const app = express()
const port =process.env.PORT || 3000
const home = path.join(__dirname, '../public')
//setting up hbs engine
app.set('view engine', 'hbs')
//views paths
app.set('views',path.join(__dirname,'../templates/views'))
//partials path. This is how to setup to use partials
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.use(express.static(home))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Navratna Vats'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Navratna Vats'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:"Help",
        helpText: 'This is some helpful text.'
    })
})


app.get("/weather",(req,res)=>{
    const address=req.query.address
    if(!address){
        return res.send("Error Please enter the term")
    }
    finder(address, (error,{temperature,feelslike,name,region,country,lati,longi,weather_descriptions,visibility,wind_speed,humidity,cloudcover}={})=>{
        if(error!==undefined)
        {
            
            return res.send({error})
            
        }
        else{
            
            res.send({
                name:name,
                region:region,
                country:country,
                temperature:temperature,
                feelslike:feelslike,
                visibility:visibility,
                wind_speed:wind_speed,
                weather_descriptions:weather_descriptions,
                lati:lati,
                longi:longi,
                cloudcover:cloudcover,
                humidity:humidity
                

            })
        }
})
})

app.get('/help/*' ,(req,res)=>{
    res.render('error',{
        title:"error",
        msg:"Help Page Not Found"
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        title:"Error",
        msg:"Page Not Found"
    })
})
app.listen(port, () => {
    console.log("Server is up on port " + port)
})