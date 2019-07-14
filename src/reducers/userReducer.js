import {ADD_OPERATION, DELETE_OPERATION} from '../actions/UserActions';


const userReducer = (state = {}, {type, data, id}) => {
    switch(type) {
        case ADD_OPERATION:
            return {...state, data}
        case DELETE_OPERATION:
            return {...state, id}
        default:
            return state;
    }
};


export default userReducer;
