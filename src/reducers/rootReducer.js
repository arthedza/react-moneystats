import { combineReducers } from "redux";
import routeReducer from './routeReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';






const rootReducer = combineReducers({router: routeReducer, data: dataReducer, user: userReducer}  )


export default rootReducer;




