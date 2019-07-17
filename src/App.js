import React from 'react';
import './App.css';

import { Layout} from 'antd';
import {Router, Route, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {Provider}   from 'react-redux';
import {createStore,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {changeRouteAction} from './actions/RouterActions';
import { fetchDataProcessing, fetchDataError, fetchDataSuccess} from './actions/DataActions';
import rootReducer from './reducers/rootReducer';
import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar'
// import SideMenuContainer from './containers/SideMenuContainer';
import TopbarContainer from './containers/TopbarContainer';
import AffixButton from './components/AffixButton';
import Spending from './components/Spending';
import Income from './components/Income';
// import Journal from './components/Journal';
import Accounts from './components/Accounts';
import JournalContainer from './containers/JournalContainer';



export const history = createBrowserHistory();




const {Header, Sider, Content} = Layout;

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=> console.log(store.getState()));


//////////////////////////////////////////////////////////
// function promiseActionsMaker(name, promise){
//   const actionPending     = () => ({ type: 'PROMISE', name, status: 'PENDING', payload: null, error: null })
//   const actionResolved    = payload => ({ type: 'PROMISE', name, status: 'RESOLVED', payload, error: null })
//   const actionRejected    = error => ({ type: 'PROMISE', name, status: 'REJECTED', payload: null, error })

//   function actionPromiseThunk(){
//       return async dispatch => {
//           dispatch(actionPending())
//           let data = await promise.catch(e => dispatch(actionRejected(e)))
//           dispatch(actionResolved(data))
//       }
//   }

//   return actionPromiseThunk;
// }
//////////////////////////////////////////////////////////
//****************************************************** */
export function fetchDataThunk() { 
  //TODO: EXPORT?????_____перенос??
  return async dispatch => {
    dispatch(fetchDataProcessing())
    fetch('http://localhost:4000/Transactions')
      .catch(error => dispatch(fetchDataError(error)))
      .then(response => response.json())
      .then(response => dispatch(fetchDataSuccess(response)));
      
  }
}
//****************************************************** */


function App() {
  return (
    <Provider store={store} >
      <Router history = {history}>
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
            <Route path="/journal" component = {JournalContainer} />
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
