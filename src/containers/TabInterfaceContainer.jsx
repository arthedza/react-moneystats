import {TabInterface} from '../components/Tabs';
import {connect}   from 'react-redux';
import {fetchDataThunk} from '../App';
import { store, postDataThunk } from '../App';
// import {} from




const mapDispatchToProps = () => (
    {
        onSave: ({date, amount, category, notes} ) => {
            // let dateFormated = date.toISOString().slice(0,10);
            console.log('---_---',date, amount, category, notes);

            // alert('hi')
            store.dispatch(postDataThunk(date, amount, category, notes));
             //TODO: !!!!!!

            
        }
    }
)

export const TabInterfaceContainer = connect(null, mapDispatchToProps)(TabInterface);
// export default TabInterfaceContainer;
