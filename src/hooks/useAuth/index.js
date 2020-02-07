import { useReducer, useEffect, useDebugValue } from "react";
import { isNil } from "@juan-utils/functions";

const createUnaryAction = type => payload => ({ type, payload });
const userAction = createUnaryAction("user");
const errorAction = createUnaryAction("error");

const reducer = (state, action) => {
	switch (action.type) {
		case "error":
			return {
				error: action.payload,
				user: null,
				loading: false,
			};
		case "user":
			return {
				error: null,
				user: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

/**
 * return the current state of authentication
 * @param {any} auth firebase auth instance
 * @return {[firebase.User,boolean,Error]} a tuple with the user, loading and error in that order
 */
const useAuth = auth => {
	const [{ user, loading, error }, dispatch] = useReducer(reducer, {
		user: auth.currentUser,
		loading: isNil(auth.currentUser),
		error: null,
	});
	useDebugValue({
		user,
		loading,
		error,
	});
	const setUser = user => dispatch(userAction(user));
	const setError = err => dispatch(errorAction(err));
	useEffect(() => {
		const unsub = auth.onAuthStateChanged(setUser, setError);
		return () => unsub();
	}, [auth]);
	return [user, loading, error];
};

export default useAuth;
