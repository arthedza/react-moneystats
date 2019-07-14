import {Provider, connect}   from 'react-redux';
import Topbar from '../components/Topbar'


const TopbarContainer = connect(state => ({route: state.router.route}))(Topbar)
export default TopbarContainer;
