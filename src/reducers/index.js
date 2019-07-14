export const rootReducer = (state = {}, {type, route}) => {
    switch(type) {
        case 'CHANGE_ROUTE':
            return {...state, route}
        default:
            return {...state, route: 'journal'};
    }
}