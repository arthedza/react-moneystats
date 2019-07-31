import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const Income = (p) => (
	<div>
		<BarChart width={730} height={250} data={p.data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="amount" fill="#1d8cf8" />
		</BarChart>
	</div>
);

export default Income;
