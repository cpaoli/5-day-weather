import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

export default (props) => {
    return (
         <div><LineChart width={300} height={200} data={props.data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
            <XAxis interval={8} dataKey="date" />
            <YAxis />
            </LineChart>
        </div>
    )
}