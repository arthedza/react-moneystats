export const ADD_OPERATION = 'ADD_OPERATION';
export const DELETE_OPERATION = 'DELETE_OPERATION';

export const addOperationAction = data => (
    {
        type: ADD_OPERATION,
        data
    }
)

export const deleteOperationAction = id => (
    {
        type: DELETE_OPERATION,
        id
    }
)