import {CHANGE_ROUTE} from '../actions/RouterActions'

const routeReducer = (state = {route: 'journal'}, {type, route}) => {
    switch(type) {
        case CHANGE_ROUTE:
            return {...state, route}
        default:
            return state;
    }
}

export default routeReducer;

