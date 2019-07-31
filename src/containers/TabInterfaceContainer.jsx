import { TabInterface } from '../components/Tabs';
import { connect } from 'react-redux';
import { store, postDataThunk } from '../App';

const mapDispatchToProps = () => ({
	onSave: ({ date, amount, category, notes }) => {
		store.dispatch(postDataThunk(date, amount, category, notes));
	}
});

export const TabInterfaceContainer = connect(null, mapDispatchToProps)(TabInterface);
