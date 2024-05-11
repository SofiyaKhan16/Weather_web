import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Temp from './Components/Temp'
import Detail from './Components/Detail'


function App() {

  const [city, setCity] = useState("Hyderabad")
  const [weatherData, setWeatherData] = useState(null)


  const weatherApi = `https://api.weatherapi.com/v1/current.json?key=80968cf7f9f04667987150749241603&q=${city}&aqi=no`

  useEffect(() => {
    fetch(weatherApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e)
      })

  }, [city])


  return (
    <>
      <div className='bg-blue-950 h-screen flex justify-center'>
        <div className='mt-40 w-1/5 h-1/2'>
          {weatherData && weatherData.current && weatherData.location &&
            <Temp setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.localtime
              }}
            />
          }
        </div>

        <div className='mt-40 w-1/3 h-1/3 ps-8 grid grid-cols-2 gap-6'>
          <h2 className='text-slate-200 text-2xl col-span-2 text-[30px] mb-8'>Today's Highlights</h2>
          {weatherData && weatherData.current && weatherData.location &&
            (
              <>
                <Detail 
                stats={{
                  title:"Wind Status",
                  value:weatherData.current.wind_mph,
                  unit:"mph",
                  direction:weatherData.current.wind_dir
                }}/>
                <Detail 
                stats={{
                  title:"Humidity",
                  value:weatherData.current.humidity,
                  unit:"%",
                }}/>
                <Detail stats={{
                  title:"Visibility",
                  value:weatherData.current.vis_miles,
                  unit:"miles",
                }}/>
                <Detail stats={{
                  title:"Air Pressure",
                  value:weatherData.current.pressure_mb,
                  unit:"mb",
                }}/>
              </>
            )
          }
        </div>
      </div>
    </>
  )

}

export default App
