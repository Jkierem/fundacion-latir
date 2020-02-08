import { combineReducers } from "redux";
import i18nReducer from "./i18n/reducer";

const reducer = combineReducers({
	language: i18nReducer,
});

export default reducer;
