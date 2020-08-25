import { convertDate } from "./utils";
let zipcode = 9120,
latitude = null,
longitude = null,
date = null,
day = new Date(),
dayOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Today']


function displayDate(){
    let [month, date, year] = (day).toLocaleDateString().split("/")
    return `${month}/${date}/${year}`
}

async function findLocation  (){
    const {data} = await axios.get(`https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=${zipcode}`)
    latitude = data.latitude
    longitude = data.longitude
    
    date = displayDate()
    findWeather(latitude, longitude, date)
    
   }
   
   findLocation()
   
async function findWeather(latitude, longitude, date) {
    const {data} = await axios.get(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=${longitude}&date=${date}`)
    let weather = data.daily.data
    for (let i = 1; i < 3; i++){
        day = new Date(convertDate(weather[i].time))
        const {data} = await axios.get(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=${longitude}&date=${displayDate()}`)
        console.log(data)
    }
 

}




