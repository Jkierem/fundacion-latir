import i18n from "i18next";
import { initializeLanguage, changeLanguage } from "./actions";
import { initReactI18next } from "react-i18next";

const i18nInitializer = store => {
	i18n.on("initialized", options => {
		store.dispatch(initializeLanguage(options.fallbackLng[0]));
	});
	i18n.on("languageChanged", lng => {
		store.dispatch(changeLanguage(lng));
	});
	i18n.use(initReactI18next).init({
		fallbackLng: "es",
		interpolation: {
			escapeValue: false,
		},
	});
};

export default i18nInitializer;
