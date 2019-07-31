import React from 'react';
import { Table } from 'antd';

const Accounts = function(p) {
	const data = [
		{
			key: '1',
			account: 'Наличные',
			total: 3260.88
		},
		{
			key: '2',
			account: 'Банковский счет',
			total: 3260.88
		},
		{
			key: '3',
			account: 'Карта',
			total: 12453.0
		}
	];
	const columns = [
		{
			title: 'Счёт',
			dataIndex: 'account',
			key: 'account',
			filters: [ { text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' } ],
			// filteredValue: filteredInfo.name || null,
			onFilter: (value, record) => record.name.includes(value),
			sorter: (a, b) => a.name.length - b.name.length
			// sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
		},
		{
			title: 'Баланс',
			dataIndex: 'total',
			key: 'total',
			sorter: (a, b) => a.age - b.age
			// sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
		}
	];
	return (
		<div className="Accounts">
			<h1>Баланс: 18974.76</h1>
			<Table columns={columns} dataSource={data} /*onChange={this.handleChange}*/ />
		</div>
	);
};

export default Accounts;
