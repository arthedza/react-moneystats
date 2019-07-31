import Journal from '../components/Journal';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
	return {
		data: state.data && state.data.data
	};
};

const JournalContainer = connect(mapStateToProps)(Journal);
export default JournalContainer;
