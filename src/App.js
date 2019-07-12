import React from 'react';
import './App.css';
import wallet from './wallet.svg'
import { Menu, Icon, Affix, Button, Layout, List, Popover, PageHeader, Tabs, Table } from 'antd';
import {Router, Route, Redirect, Link, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import createHistory from "history/createBrowserHistory";

const {Header, Sider, Content} = Layout;
const { TabPane } = Tabs;
const rootReducer = (state = {}, {type, route}) => {
  switch(type) {
    case 'CHANGE_ROUTE':
      return {...state, route}
    default:
      return {...state, route: 'journal'};
  }
}
const store = createStore(rootReducer);
store.subscribe(()=> console.log(store.getState()));

/*ACTIONS*/
const changeRouteAction = route => (
  {
    type: 'CHANGE_ROUTE',
    route
  }
) 
// const navigateTo = 


const Sidebar = p => (
  <div className="Sidebar">
    <div className="Logo">
    <img src={wallet} className="App-logo" alt="logo" />
      MoneyStats
    </div>
    <div className="SideMenu">
    <SideMenuContainer/>
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
      <Menu.Item key="1" onClick={() => p.navigateTo('journal')}>
        <Icon type="container" />
        <span>Журнал</span>
        <Link to='/journal'></Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={()=>p.navigateTo('accounts')}>
        <Icon type="credit-card" />
        <span>Счета</span>
        <Link to='/accounts'></Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={()=>p.navigateTo('spending')}>
        <Icon type="fall" />
        <span>Расходы</span>
        <Link to='/spending'></Link>
      </Menu.Item>
      <Menu.Item key="4" onClick={()=>p.navigateTo('income')}>
        <Icon type="rise" />
        <span>Доходы</span>
        <Link to='/income'></Link>
      </Menu.Item>
    </Menu>
  </div>
)
const SideMenuContainer = connect(null, {
  navigateTo: route => store.dispatch(changeRouteAction(route))
})(SideMenu)

const Topbar = p => (
  <div className="Title">
  <PageHeader onBack={() => null} title={p.route} subTitle="This is a subtitle" />
  </div>
)
const TopbarContainer = connect(state => ({route: state.route}))(Topbar)
//({route: state.route})

const AffixButton = p => (
  <div>
    <Affix className="AffixButton"/*offsetBottom={this.state.bottom}*/>
    <Popover content={PopoverContent} title="Новая операция" trigger="click">
    <Button
            type="primary"
            // onClick={() => {
            //   this.setState({
            //     bottom: this.state.bottom + 10,
            //   });
            // }}
          >
            <Icon id="add" type="plus"  />
            Добавить операцию
    </Button>
    </Popover>  
    
  </Affix>
  </div>
  
)

const Journal = function(p) {
  const data = [
    {
      title: 'Продукты и бакалея',
      total: 237
    },
    {
      title: 'Обеды',
      total: 89
    },
    {
      title: 'Транспортные карты',
      total: 100
    },
    {
      title: 'Кофе',
      total: 22
    },
    {
      title: 'Премия',
      total: 2200
    },
  ];
  return (
    <div >
      
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

const Accounts = function(p) {
  const data = [
    {
      key: '1',
      account: 'Наличные',
      total: 3260.88,
      // address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      account: 'Банковский счет',
      total: 3260.88,
      // address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      account: 'Карта',
      total: 12453.00,
      address: 'Sidney No. 1 Lake Park',
    },
    
  ];
  const columns = [
    {
      title: 'Счёт',
      dataIndex: 'account',
      key: 'account',
      filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
      // filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    },
    {
      title: 'Баланс',
      dataIndex: 'total',
      key: 'total',
      sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    },]
  return (
    <div className="Accounts">
      <h1>Баланс: 18974.76</h1>
      <Table columns={columns} dataSource={data} /*onChange={this.handleChange}*/ />
    </div>
  )
} 

const Spending = p => (
  <div ></div>
)

const Income = p => (
  <div ></div>
)

function callback(key) {
  console.log(key);
}
const PopoverContent = (
  <div>

    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane id="spending-tab" tab="Расход" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane id="income-tab" tab="Доход" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane id="transfer-tab" tab="Перевод" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </div>
);

function App() {
  return (
    <Provider store={store} >
      <Router history = {createBrowserHistory()}>
        <Layout>
          {/* <div className="App"> */}
          
            <AffixButton/>
          
          <Sider>
          <Sidebar/>
          </Sider>
          
          <div className="Wrapper">
          <Header>
          <TopbarContainer/>
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
    </Provider>    
      
  );
}

export default App;
