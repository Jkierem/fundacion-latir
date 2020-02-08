import { INIT_LANG, CHANGE_LANG } from "./actions";

const initial = {
	ready: false,
	language: null,
};

const reducer = (state = initial, action = {}) => {
	switch (action.type) {
		case INIT_LANG:
			return {
				...state,
				ready: true,
				language: action.payload,
			};
		case CHANGE_LANG:
			return {
				...state,
				language: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
