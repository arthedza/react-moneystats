import Journal from '../components/Journal';
import {connect}   from 'react-redux';

// const mapStateToProps = state => (
//     {
//         id: state.data.id,
//         date: state.data.date,
//         amount: state.data.amount,
//         category: state.data.category,
//         notes: state.data.notes
//     }
// )
const mapStateToProps = function (state) {
    console.log(...state.data.data)
    

        return (
            {
                data: state.data && state.data.data
            }
        
        
    )
} 

const JournalContainer = connect(mapStateToProps)(Journal)
export default JournalContainer;
