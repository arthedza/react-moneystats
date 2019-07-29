import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

// const { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } = BarChart;
// function getDays(data = []) {
// 	if (data) {
// 		let arr = [];
// 		data.forEach((element) => arr.push(element.date));
// 		return [ ...new Set(arr) ];
// 	}
// }

// function sortByDays(days, data = []) {
// 	let result = [];
// 	let sorted = [];
// 	let filtered = [];
// 	days.forEach((day) => {
// 		sorted = data.map((element) => {
// 			if (element.date === day) {
// 				return {
// 					amount: element.amount,
// 					category: element.category,
// 					notes: element.notes
// 				};
// 			}
// 		});
// 		filtered = sorted.filter((element) => {
// 			return element !== undefined;
// 		});
// 		result.push({
// 			day,
// 			operations: filtered
// 		});
// 	});
// 	return result;
// }


const Spending = (p) => (
	<div className="Spending">
	{console.log('P: ',p.data)}
	<h1>Расходы:</h1>
		<BarChart width={750} height={250} data={p.data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="amount" fill="#1d8cf8" />
		</BarChart>
	</div>
);

export default Spending;
