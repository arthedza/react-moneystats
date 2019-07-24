import Spending from '../components/Spending';
import {connect}   from 'react-redux';


const mapStateToProps = function (state) {
    

        return (
            {
                data: state.data && state.data.data
            }
        
        
    )
} 

const SpendingContainer = connect(mapStateToProps)(Spending)
export default SpendingContainer;
