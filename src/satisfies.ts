type Color = string | { r: number; g: number; b: number };

const red: Color = "red";
const green = "green" as Color;
const blue = "blue" satisfies Color;

green.startsWith("r");
