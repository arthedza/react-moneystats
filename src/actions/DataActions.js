export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const DATA_LOADING = 'DATA_LOADING';
export const DATA_ERROR = 'DATA_ERROR';
export const DATA_SUCCESS = 'DATA_SUCCESS';




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

export const fetchDataProcessing = () => (
    {
        type: DATA_LOADING,
        isLoading: true
    }
)

export const fetchDataError = error => (
    {
        type: DATA_ERROR,
        hasError: error,
        isLoading: false
    }
)

export const fetchDataSuccess = data => (
    {
        type: DATA_SUCCESS,
        isLoading: false,
        data
    }
)

