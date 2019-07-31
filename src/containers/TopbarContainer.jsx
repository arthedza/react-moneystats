import { connect } from 'react-redux';
import Topbar from '../components/Topbar';
import { history } from '../App';

const TopbarContainer = connect((state) => ({ route: history.location.pathname }))(Topbar);
export default TopbarContainer;
