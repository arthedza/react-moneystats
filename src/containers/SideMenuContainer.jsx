import SideMenu from '../components/SideMenu';
import { connect } from 'react-redux';
import { changeRouteAction } from '../actions/RouterActions';
import { store } from '../App';

const SideMenuContainer = connect(null, {
	navigateTo: (route) => store.dispatch(changeRouteAction(route))
})(SideMenu);

export default SideMenuContainer;
