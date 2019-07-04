import React from 'react';
import './App.css';
import wallet from './wallet.svg'
import { Menu, Icon, Affix, Button } from 'antd';

const Sidebar = p => (
  <div className="Sidebar">
    <div className="Logo">
    <img src={wallet} className="App-logo" alt="logo" />
      MoneyStats
    </div>
    <SideMenu/>
    <span id="copyright">Copyright © 2019, Artedza</span>
  </div>
  
)

const SideMenu = p => (
  <div className="SideMenu">
    
    <Menu 
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="1">
        <Icon type="container" />
        <span>Журнал</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="credit-card" />
        <span>Счета</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="fall" />
        <span>Расходы</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="rise" />
        <span>Доходы</span>
      </Menu.Item>
    </Menu>
  </div>
)

const Topbar = p => (
  <div className="Topbar">
  dgjsfslkfjshf
  </div>
)

const AffixButton = p => (
  <Affix className="AffixButton"/*offsetBottom={this.state.bottom}*/>
    <Button
            type="primary"
            // onClick={() => {
            //   this.setState({
            //     bottom: this.state.bottom + 10,
            //   });
            // }}
          >
            <Icon id="add" type="plus"  />
            Affix bottom
    </Button>
  </Affix>
)

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Topbar/>
      <AffixButton/>
    </div>
  );
}

export default App;
