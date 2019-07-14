import {SELECT_CATEGORY, ADD_RECORD, DELETE_RECORD} from '../actions/DataActions.js';

const dataReducer = (state = {}, {type, category, data, id}) => {
    switch(type) {
        case SELECT_CATEGORY:
            return {...state, category}
        case ADD_RECORD:
            return {...state, data} 
        case DELETE_RECORD:
            return {...state, id}
        default:
            return state;           
    }
}

export default dataReducer;
