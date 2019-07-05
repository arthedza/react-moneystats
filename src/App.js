import React from 'react';
import './App.css';
import wallet from './wallet.svg'
import { Menu, Icon, Affix, Button, Layout, List } from 'antd';
import {Router, Route, Redirect, Link, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import createHistory from "history/createBrowserHistory";

const {Header, Sider, Content} = Layout;


const Sidebar = p => (
  <div className="Sidebar">
    <div className="Logo">
    <img src={wallet} className="App-logo" alt="logo" />
      MoneyStats
    </div>
    <div className="SideMenu">
    <SideMenu/>
    </div>
    
    <span id="copyright">Copyright © 2019, Artedza</span>
  </div>
  
)

const SideMenu = p => (
  <div >
    
    <Menu 
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="1">
        <Icon type="container" />
        <span>Журнал</span>
        <Link to='/journal'></Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="credit-card" />
        <span>Счета</span>
        <Link to='/accounts'></Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="fall" />
        <span>Расходы</span>
        <Link to='/spending'></Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="rise" />
        <span>Доходы</span>
        <Link to='/income'></Link>
      </Menu.Item>
    </Menu>
  </div>
)

const Topbar = p => (
  <div className="Title">
  Title
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

const Journal = function(p) {
  const data = [
    {
      title: 'Продукты и бакалея',
    },
    {
      title: 'Обеды',
    },
    {
      title: 'Транспортные карты',
    },
    {
      title: 'Кофе',
    },
  ];
  return (
    <div >
      Journal
      <div id="date">25 мая, суббота</div>
      <List id="transactions"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            /*avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}*/
            title={<a href="https://ant.design">{item.title}</a>}
            description="Наличные"
          /> <div id="total">-45</div>
        </List.Item>
      )}>
        
      </List>
    </div>
  )
} 

const Accounts = p => (
  <div >Accounts</div>
)

const Spending = p => (
  <div >Spending</div>
)

const Income = p => (
  <div >Income</div>
)

function App() {
  return (
    <Router history = {createBrowserHistory()}>
      <Layout>
        {/* <div className="App"> */}
        {/* <AffixButton/> */}
        <Sider>
        <Sidebar/>
        </Sider>
        
        <div className="Wrapper">
        <Header>
        <Topbar/>
        </Header>
        
        <Content>
        <Redirect from="/" to="/journal" />
          <Route path="/journal" component = {Journal} />
          <Route path="/accounts" component = {Accounts} />
          <Route path="/spending" component = {Spending} />
          <Route path="/income" component = {Income} />
        </Content>
          
        </div>
        
        
        {/* </div> */}
      </Layout>
    </Router>  
  );
}

export default App;
