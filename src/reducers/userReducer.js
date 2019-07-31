import { SELECT_CATEGORY, ADD_OPERATION, DELETE_OPERATION } from '../actions/UserActions';

const userReducer = (state = {}, { type, data, id, category }) => {
	switch (type) {
		case ADD_OPERATION:
			return { ...state, data };
		case DELETE_OPERATION:
			return { ...state, id };
		case SELECT_CATEGORY:
			return { ...state, category };
		default:
			return state;
	}
};

export default userReducer;
