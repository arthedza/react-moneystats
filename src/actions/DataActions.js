export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';



export const addDataAction = data => (
    {
        type: ADD_RECORD,
        data
    }
)

export const changeDataAction = id => (
    {
        type: DELETE_RECORD,
        id
    }
)

export const selectCategoryAction = category => (
    {
        type: SELECT_CATEGORY,
        category
    }
)
// export const changeRouteAction = route => (
//     {
//         type: CHANGE_ROUTE,
//         route
//     }
// ) 