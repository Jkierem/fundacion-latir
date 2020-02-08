import { useState, useEffect } from "react";
import { Firebase } from "../../middleware";

/**
 * listens to a given path of the firebase realtime database
 * @param {string} path
 * @returns {[any]} the data as a javascript object
 */
const useDatabase = path => {
	const [data, setData] = useState({});
	useEffect(() => {
		return Firebase.database(path)
			.map(x => x.toJSON())
			.map(setData)
			.unsafeListen();
	}, [path]);
	return [data];
};

export default useDatabase;
