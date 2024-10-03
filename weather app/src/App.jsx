import { useState } from 'react';

function App() {
  const key = '770165508780879f09508d1c66b640b2';
  // const lat = 27.048034;
  // const lon = 84.871805;

  let [temperature,setTemperature] = useState(0);
  let [cityName, setCityName] = useState('');

  async function getCityWeather(){
    const city = document.getElementById('cityName').value;
    if(city!=''){
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      const data = await weather.json();
      setTemperature(Math.floor((data.main.temp) - 273.15));
      setCityName(data.name);
      console.log(data);
    }else{
      alert("Enter your city name.");
    }
  }

  function BtnProps(){
    let btn = document.getElementById('searchBtn');
    let city = document.getElementById('cityName');
    if(city.value==='') {
      btn.disabled = true;
      btn.style.opacity = '0.5';
    }else{
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }
  
  return (
    <>
      <div className='flex flex-col bg-white max-w-[400px] w-[100%] p-5 gap-5 m-4 items-center rounded-xl shadow-2xl'>
        <h1 className="text-3xl">Weather App</h1>
        <input type="text" id='cityName' 
          onKeyUp={(e)=>{
            BtnProps();
            // console.log(e.key=="Enter")
            if(e.key=="Enter") {
              getCityWeather();
            }
          }} 
          placeholder='Weather in your City' 
          className="w-4/5 p-1 px-3 text-black outline-none text-center drop-shadow-md rounded-full bg-zinc-50 "/> 
        <button id='searchBtn' onClick={getCityWeather} 
          className="bg-[#1e90ff] text-white font-bold text-lg px-10 py-1 rounded-md">Search</button>
        <hr width='100%'/>
        <span>OR</span>
        <button className="bg-[#1e90ff] font-bold text-white text-lg px-10 py-1 rounded-md">My Location</button>
      </div>
      <div className="flex flex-col bg-white max-w-[400px] w-[100%] p-5 m-4 items-center rounded-xl shadow-2xl">
        <p>Temperature of {cityName}</p>
        <div className="flex">
          <div className="text-6xl">{temperature}</div>
          <span>o<sub className="text-xl">C</sub></span>
        </div>
      </div>
    </>
  )
}

export default App
