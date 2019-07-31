import React from 'react';
import './App.css';

import { Layout } from 'antd';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchDataProcessing, fetchDataError, fetchDataSuccess } from './actions/DataActions';
import rootReducer from './reducers/rootReducer';
import Sidebar from './components/Sidebar';
import TopbarContainer from './containers/TopbarContainer';
import AffixButton from './components/AffixButton';
import Income from './components/Income';
import Accounts from './components/Accounts';
import JournalContainer from './containers/JournalContainer';
import SpendingContainer from './containers/SpendingContainer';

export const history = createBrowserHistory();

const { Header, Sider, Content } = Layout;

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

export function fetchDataThunk() {
	return async (dispatch) => {
		dispatch(fetchDataProcessing());
		let res = null;
		res = await fetch('http://localhost:5000/Transactions?_sort=date&_order=ASC')
			.catch((error) => dispatch(fetchDataError(error)))
			.then((response) => (res = response.json()))
			.then((response) => dispatch(fetchDataSuccess(response)));
		return await res;
	};
}

export function postDataThunk(date, amount, category, notes) {
	return async (dispatch) => {
		let dateFormated = date.toISOString().slice(0, 10);
		dispatch(fetchDataProcessing());
		dispatch(fetchDataThunk());
		fetch('http://localhost:5000/Transactions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				date: dateFormated,
				amount,
				category,
				notes
			})
		})
			.catch((error) => dispatch(fetchDataError(error)))
			.then((response) => response.json())
			.then((response) => dispatch(fetchDataSuccess(response)))
			.then(() => store.dispatch(fetchDataThunk()));
	};
}

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Layout>
					<AffixButton />
					<Sider>
						<Sidebar />
					</Sider>
					<div className="Wrapper">
						<Header>
							<TopbarContainer />
						</Header>
						<Content>
							<Redirect from="/" to="/journal" />
							<Route path="/journal" component={JournalContainer} />
							<Route path="/accounts" component={Accounts} />
							<Route path="/spending" component={SpendingContainer} />
							<Route path="/income" component={Income} />
						</Content>
					</div>
				</Layout>
			</Router>
		</Provider>
	);
}

export default App;
