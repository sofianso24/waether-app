const axios =require("axios")
const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
const Weather=require("../model/Weather")


exports.renderHomePage = (req,res)=>{
    res.render("index")
}
exports.renderAboutPage = (req,res)=>{
    res.render("about")
}
exports.getWeather=(req,res)=>{
    const city = req.body.city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const weather = new Weather(req.body.city)
    weather.validateUserInput()
    axios.get(url).then((response)=>{
                    res.render("index",{
                        weather:`it is currently ${response.data.main.temp} in ${response.data.name}.`
                    })
    }).catch((error)=>{
        console.log(error)
    })

}