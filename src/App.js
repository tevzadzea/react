import React from 'react';
import './App.css';
import Todolist from './list/list'
import Information from './weather/weather'
import Weather from './weather/weatherscript'
import Form from './weather/form'
import Dropdown from './dropdown/dropdown'



class App extends React.Component {
    state = {
      name: undefined,
      temp: undefined
    }

    gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    if (city) {
      const API_KEY = "3c8a186ffed2004efde73d75dad16986";
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      console.log(data);
        this.setState({
         temp: data.main.temp,
         name: data.name,
         pressure: data.main.pressure
        });
    }
  }

  render() {
    return(

        <div>
          
          <Todolist  />
            <br />
           
          <Information />
          <Weather 
           temp = {this.state.temp}
           name = {this.state.name}
           pressure = {this.state.pressure}
          />
          <Form 
          weatherMethod={this.gettingWeather}
          />

          <br />
          <Dropdown />
        </div>
    );
  }
}

export default App;
