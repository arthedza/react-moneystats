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
		console.log(this.props); //TODO:
	}

	render() {
		console.log('this.props.data: ', this.props.data);
		return (
			<div className="Journal">
				{this.props.data && this.props.data.length ? (
					this.props.data.map((elem) => (
						<div key={elem.id}>
							<div id="date">{elem.date}</div>
							<List
							id="transactions"
							itemLayout="horizontal"
							dataSource={this.props.data}
							renderItem={(item) => (
								<div>
									<List.Item>
										<List.Item.Meta
											// avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
											title={<a href="https://ant.design">{item.category}</a>}
											description={elem.notes}
										/>
									</List.Item>
									<div id="total">{item.amount} ₴</div>
								</div>
							)}
						/>
						</div>
					))
				) : null}
			</div>
		);
	}
}

export default Journal;
