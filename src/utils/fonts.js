const SizeValues = {
	Largest: "2em",
	Huge: "1.5em",
	Big: "1.17em",
	Normal: "1em",
	Small: ".83em",
	Tiny: ".67em",
};

const Sizes = {
	Largest: "largest",
	Huge: "huge",
	Big: "big",
	Normal: "normal",
	Small: "small",
	Tiny: "tiny",
};

/**
 * returns the size value in 'em' for a given size.
 * @typedef {{ size: ("largest" | "huge" | "big" | "normal" | "small" | "tiny") }} FontOptions
 * @param {FontOptions} param0
 */
const pickFontSize = ({ size }) => {
	switch (size) {
		case Sizes.Huge:
			return SizeValues.Huge;
		case Sizes.Big:
			return SizeValues.Big;
		case Sizes.Small:
			return SizeValues.Small;
		case Sizes.Tiny:
			return SizeValues.Tiny;
		case Sizes.Normal:
		default:
			return SizeValues.Normal;
	}
};

const Fonts = {
	Sizes,
	SizeValues,
	pickFontSize,
};

export default Fonts;
