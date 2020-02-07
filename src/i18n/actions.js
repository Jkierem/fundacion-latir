export const INIT_LANG = "init_lang";
export const CHANGE_LANG = "change_lang";

export const initializeLanguage = () => ({
  type: INIT_LANG
});

export const changeLanguage = payload => ({
  type: CHANGE_LANG,
  payload
});
