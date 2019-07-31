import React from 'react';
import { PageHeader } from 'antd';
import { history } from '../App';

const Topbar = (p) => (
	<div className="Title">
		<PageHeader onBack={() => history.goBack()} title={p.route} subTitle="This is a subtitle" />
	</div>
);

export default Topbar;
