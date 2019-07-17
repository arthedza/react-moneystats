import { ADD_RECORD, DELETE_RECORD, DATA_LOADING, DATA_ERROR, DATA_SUCCESS} from '../actions/DataActions.js';

const initialState = {
    data: []
}
const dataReducer = (state = initialState, {type, data, id, bool}) => {
    switch(type) {
        case ADD_RECORD:
            return {...state, data} 
        case DELETE_RECORD:
            return {...state, id}
        case DATA_LOADING:
            return {...state, isLoading: true}
        case DATA_ERROR:
            return {...state, hasError: bool, isLoading: false}
        case DATA_SUCCESS:
            return {...state, data, isLoading: false}        
        default:
            return state;           
    }
}

export default dataReducer;
