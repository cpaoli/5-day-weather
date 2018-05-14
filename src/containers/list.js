import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { connect } from 'react-redux';

class List extends Component {
    render (){
        return(
            <table className="table">
                <thead>                
                <tr>
                    <th scope="col col-md-3"><div style={{width:"50%", margin:"0 auto", textAlign: "center"}}>City</div></th>
                    <th scope="col col-md-3"><div style={{width:"50%", margin:"0 auto", textAlign: "center"}}>Temperature (°C)</div></th>
                    <th scope="col col-md-3"><div style={{width:"50%", margin:"0 auto", textAlign: "center"}}>Pressure (hPa)</div></th>
                    <th scope="col col-md-3"><div style={{width:"50%", margin:"0 auto", textAlign: "center"}}>Humidity (%)</div></th>
                </tr>
                </thead>
                <tbody>{console.log("state: ",this.props.weatherList)}
                {this.props.weatherList.map((city, index) => {
                    const cityName = city.data.city.name;
                    const temp = city.data.list.map((list) => ({value: Math.floor(list.main.temp -273.15)}));
                    const pressure = city.data.list.map((list) => ({value:list.main.pressure}));
                    const humidity = city.data.list.map((list) => ({value:list.main.humidity}));

                    console.log("temp",temp);
                    return <tr key = {index}>
                        <td>{cityName}</td>
                        <td><LineChart width={300} height={200} data={temp}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
                            <XAxis interval={8} dataKey="date" />
                            <YAxis />
                            </LineChart></td>
                        <td><LineChart width={300} height={200} data={pressure}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
                            <XAxis interval={8} dataKey="date" />
                            <YAxis />
                            </LineChart></td>
                        <td><LineChart width={300} height={200} data={humidity}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false}/>
                            <XAxis interval={8} dataKey="date" />
                            <YAxis />
                            </LineChart></td>
                    </tr>
                })}
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