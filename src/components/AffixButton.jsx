import React from 'react';
import { Icon, Affix, Button, Popover, Tabs } from 'antd';
import { TabInterfaceContainer } from '../containers/TabInterfaceContainer';

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const PopoverContent = (
	<div>
		<Tabs defaultActiveKey="1" onChange={callback}>
			<TabPane id="spending-tab" tab="Расход" key="1">
				<TabInterfaceContainer />
			</TabPane>
			<TabPane id="income-tab" tab="Доход" key="2">
				<TabInterfaceContainer />
			</TabPane>
			<TabPane id="transfer-tab" tab="Перевод" key="3" />
		</Tabs>
	</div>
);

const AffixButton = (p) => (
	<div>
		<Affix className="AffixButton">
			<Popover content={PopoverContent} title="Новая операция" trigger="click">
				<Button type="primary">
					<Icon id="add" type="plus" />
					Добавить операцию
				</Button>
			</Popover>
		</Affix>
	</div>
);

export default AffixButton;
