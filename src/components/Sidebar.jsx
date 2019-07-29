import React from 'react';
import wallet from '../wallet.svg';
import SideMenuContainer from '../containers/SideMenuContainer';

const Sidebar = (p) => (
	<div className="Sidebar">
		<div className="Logo">
			<img src={wallet} className="App-logo" alt="logo" />
			MoneyStats
		</div>
		{/* <div className="SideMenu-wrapper"> */}
			<div className="SideMenu">
				<SideMenuContainer />
			</div>
		{/* </div> */}

		<span id="copyright">Copyright © 2019, Artedza</span>
	</div>
);

export default Sidebar;
