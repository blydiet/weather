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
    console.log(date)
   }
   
   findLocation()
   