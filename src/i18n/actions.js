export const INIT_LANG = "init_lang";
export const CHANGE_LANG = "change_lang";

export const initializeLanguage = payload => ({
	type: INIT_LANG,
	payload,
});

export const changeLanguage = payload => ({
	type: CHANGE_LANG,
	payload,
});
