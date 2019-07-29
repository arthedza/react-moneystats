import React from 'react';
import { List } from 'antd';
import { store } from '../App';
import { fetchDataThunk } from '../App'; //TODO: !!!!!

class Journal extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	componentWillMount() {
		store.dispatch(fetchDataThunk()); //TODO: !!!!!!
		console.log(this.props);
	}

	//////////////////////////////////////////////////////////
	getDays(data = []) {
		if (data) {
			let arr = [];
			data.forEach((element) => arr.push(element.date));
			return [ ...new Set(arr) ];
		}
	}

	sortByDays(days, data = []) {
		let result = [];
		let sorted = [];
		let filtered = [];
		days.forEach((day) => {
			sorted = data.map((element) => {
				if (element.date === day) {
					return {
						amount: element.amount,
						category: element.category,
						notes: element.notes
					};
				}
			});
			filtered = sorted.filter((element) => {
				return element !== undefined;
			});
			result.push({
				day,
				operations: filtered
			});
		});
		return result;
	}

	//////////////////////////////////////////////////////////

	render() {
		return (
			<div className="Journal">
				{this.props.data && this.props.data.length ? (
					this.sortByDays(this.getDays(this.props.data), this.props.data).map((elem, index) => (
						<div key={index}>
							{console.log('elem', elem)}
							<div id="date">{elem.day}</div>
							<List
								id="transactions"
								itemLayout="horizontal"
								dataSource={elem.operations}
								renderItem={(operation) => (
									<div>
										{console.log('OPS: ', operation)}
										<List.Item>
											<List.Item.Meta
												title={<a href="https://ant.design">{operation.category}</a>}
												description={operation.notes || "\u00A0"}
											/>
										</List.Item>
										<div id="total">{operation.amount} ₴</div>
									</div>
								)}
							/>
						</div>
					)) //___
				) : null}
			</div>
		);
	}
}
////

export default Journal;