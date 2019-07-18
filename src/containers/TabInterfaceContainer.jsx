import {TabInterface} from '../components/Tabs';
import {connect}   from 'react-redux';

const mapDispatchToProps = () => (
    {
        onSave: () => {
            // alert('hi')
            
        }
    }
)

export const TabInterfaceContainer = connect(null, mapDispatchToProps)(TabInterface);
// export default TabInterfaceContainer;
