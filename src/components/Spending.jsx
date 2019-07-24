import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

// const { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } = BarChart;



const Spending = (p) => (
	<div>
	{console.log('P: ',p.data)}
		<BarChart width={730} height={250} data={p.data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="amount" fill="#1d8cf8" />
			{/* <Bar dataKey="uv" fill="#82ca9d" /> */}
		</BarChart>
	</div>
);

export default Spending;
