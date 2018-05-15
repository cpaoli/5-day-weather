import React, {Component} from 'react';
import Chart from '../components/chart'
import { connect } from 'react-redux';

class List extends Component {
    renderWeather(cityData) {
        const name = cityData.data.city.name;
        const temp = cityData.data.list.map((list) => ({value: Math.floor(list.main.temp -273.15)}));
        const pressure = cityData.data.list.map((list) => ({value:list.main.pressure}));
        const humidity = cityData.data.list.map((list) => ({value:list.main.humidity}));
        return(
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temp} /></td>
                <td><Chart data={pressure} /></td>
                <td><Chart data={humidity} /></td>           
            </tr>
        )            
    }

    render (){
        const fieldsList = ["City", "Temperature (°C)", "Pressure (hPa)", "Humidity (%)"];
        const fields = fieldsList.map((field) => (
            <th key={field} scope="col col-md-3">
                <div style={{width:"50%", margin:"0 auto", textAlign: "center"}}>{field}</div>
            </th>
        ));
        
        return (
            <table className="table">
                <thead>                
                    <tr>{fields}</tr>
                </thead>
                <tbody>
                    {this.props.weatherList.map(this.renderWeather)}
               </tbody>
            </table>
            )
    }
}

function mapStateToProps(state) {
    return{
        weatherList: state.weatherList
    }
}

export default connect(mapStateToProps)(List);