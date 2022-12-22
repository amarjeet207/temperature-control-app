import React, {useState} from 'react'

function App() {

  
  const[temperatureValue,settemperatureValue] = useState(10);
  const[temperatureColor, settemperatureColor] = useState('');

  //method to increase the temperature by 1 value and change the color when it reaches 15℃
  const increasedTemperature = () =>{
    if(temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    if(newTemperature >= 15){
      settemperatureColor('hot');}
    settemperatureValue(newTemperature);
  };

  //method to decrease the temperature and change color when it reaches below 15℃ 
  const decreasedTemperature = () =>{
    if(temperatureValue === -15) return;
    const newTemperature = temperatureValue - 1;
    if(newTemperature < 15){
      settemperatureColor('cold');}
      settemperatureValue(newTemperature);
  };

    return (
    <div className ="app-container">
      <div className = "temperature-display-container">
      <div className ={`temperature-display ${temperatureColor}`}>{temperatureValue}℃</div>
      </div>
      <div className='button-container'>
        <button onClick={()=> decreasedTemperature()}>-</button>
        <button onClick={()=> increasedTemperature()}>+</button>
      </div>
    </div>
  )
}

export default App
