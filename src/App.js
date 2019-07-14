import React from 'react';
import './App.css';

import { Menu, Icon, Affix, Button, Layout, List, Popover, PageHeader, Tabs, Table } from 'antd';
import {Router, Route, Redirect, Link, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {changeRouteAction} from './actions/RouterActions';
import {rootReducer} from './reducers/index';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar'
import SideMenuContainer from './containers/SideMenuContainer';
import TopbarContainer from './containers/TopbarContainer';
import AffixButton from './components/AffixButton';
import Spending from './components/Spending';
import Income from './components/Income';
import Journal from './components/Journal';
import Accounts from './components/Accounts';






const {Header, Sider, Content} = Layout;

export const store = createStore(rootReducer);
store.subscribe(()=> console.log(store.getState()));


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
