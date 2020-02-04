import { prop, compose, propApply } from "@juan-utils/functions";

const toHex = (value) => value.toString(16);

const Color = (r,g,b) => {
    return {
        rgb(){
            return [r,g,b];
        },
        rgbCss(){
            return `rgb(${r},${g},${b})`;
        },
        hex(){
            return [r,g,b].map(toHex);
        },
        hexString(){
            return "#" + [r,g,b].map(toHex).join("")
        }
    }
}

const TwoColor = ({ Light , Dark }) => {
    return {
        rgb: Light.rgb,
        rgbCss: Light.rgbCss,
        hex: Light.hex,
        hexString: Light.hexString,
        Light,
        Dark
    }
}

const Themes = {
    Primary: "primary",
    Secondary: "secondary",
    Negative: "negative"
}

const Modes = {
    Dark: "dark",
    Light: "light"
}

/**
 * returns color based on theme
 * @typedef {("primary" | "secondary" | "negative")} Theme
 * @typedef {{
 *  rgb: () => [number,number,number];
 *  rgbCss: () => string;
 *  hex: () => [number,number,number];
 *  hexString () => string;
 * }} ColorType
 * @typedef {{
 *  rgb: () => [number,number,number];
 *  rgbCss: () => string;
 *  hex: () => [number,number,number];
 *  hexString () => string;
 *  Light: ColorType;
 *  Dark: ColorType;
 * }} TwoColorType
 * @param {Theme} theme
 * @returns {TwoColorType}
 */
const chooseThemeColor = (theme) => {
    switch(theme){
        case Themes.Primary:
        default:
            return Colors.Primary;
        case Themes.Secondary:
            return Colors.Secondary;
        case Themes.Negative:
            return Colors.Error;
    }
}

const getDark = prop("Dark");
const getLight = prop("Light");
const getMode = (mode) => mode === Modes.Dark ? getDark : getLight;

/**
 * returns color object based on theme and mode
 * @typedef {("dark" | "light")} Mode
 * @typedef {{
 *  theme: Theme;
 *  mode?: Mode;
 * }} ColorOptions
 * @param {ColorOptions} options 
 * @returns {ColorType}
 */
const pickColor = ({ theme , mode=Modes.Light }) => compose( getMode(mode) , chooseThemeColor )(theme);

/**
 * return dark mode of color based on theme
 * @param {{ theme: Theme }} options 
 * @returns {ColorType}
 */
const pickDarkColor = ({ theme }) => pickColor({ theme, mode: Modes.Dark });

/**
 * return light mode of color based on theme
 * @param {{ theme: Theme }} options 
 * @returns {ColorType}
 */
const pickLightColor = ({ theme }) => pickColor({ theme, mode: Modes.Light });

/**
 * returns the hex string of a color based on theme and mode
 * @param {ColorOptions} options
 * @returns {string} string hex representation of theme color in given mode
 */
const getColorHex = (options) => compose( propApply("hexString", []) , pickColor )(options);

/**
 * Forces dark mode and returns the hex string
 * @param {{ theme: Theme; }} options 
 * @returns {string} string hex representation of dark theme color
 */
const getDarkColorHex = (options) => compose( propApply("hexString", []) , pickDarkColor )(options);

/**
 * Forces light mode and returns the hex string
 * @param {{ theme: Theme; }} options 
 * @returns {string} string hex representation of light theme color
 */
const getLightColorHex = (options) => compose( propApply("hexString", []) , pickLightColor )(options);

export const RawColors = {
    Black: Color(30,37,41),
    White: Color(255,255,255),
    LightGreen: Color(75,170,155),
    DarkGreen: Color(53,131,119),
    LightPurple: Color(204,119,146),
    DarkPurple: Color(154,62,89),
    BrightRed: Color(206,69,42),
    DarkRed: Color(161,54,32),
    LightGray: Color(200, 200, 200),
    DarkGray: Color(97, 97, 97),
}

const Colors = {
    Black: RawColors.Black,
    White: RawColors.White,
    Gray: TwoColor({
        Light: RawColors.LightGray,
        Dark: RawColors.DarkGray,
    }),
    Primary: TwoColor({
        Light: RawColors.LightGreen,
        Dark: RawColors.DarkGreen,
    }),
    Secondary: TwoColor({
        Light: RawColors.LightPurple,
        Dark: RawColors.DarkPurple,
    }),
    Error: TwoColor({
        Light: RawColors.BrightRed,
        Dark: RawColors.DarkRed,
    }),
    Themes,
    Modes,
    pickColor,
    pickDarkColor,
    pickLightColor,
    chooseThemeColor,
    getColorHex,
    getDarkColorHex,
    getLightColorHex,
}

export default Colors;