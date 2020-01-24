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

export const RawColors = {
    Black: Color(30,37,41),
    White: Color(255,255,255),
    LightGreen: Color(75,170,155),
    DarkGreen: Color(53,131,119),
    LightPurple: Color(204,119,146),
    DarkPurple: Color(154,62,89),
    BrightRed: Color(206,69,42)
}

const Colors = {
    Black: RawColors.Black,
    White: RawColors.White,
    Primary: TwoColor({
        Light: RawColors.LightGreen,
        Dark: RawColors.DarkGreen,
    }),
    Secondary: TwoColor({
        Light: RawColors.LightPurple,
        Dark: RawColors.DarkPurple,
    }),
    Error: RawColors.BrightRed,
}

export default Colors;