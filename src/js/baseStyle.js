import color from 'color';

//nasty color is mutable

const GREEN_COLOR = color('#1abc9c');
const BLUE_COLOR  = color('#3498db');
const VIOLET_COLOR = color('#9b59b6');
const RED_COLOR = color('#e74c3c');
const ORANGE_COLOR = color('#e67e22');
const GRAY_COLOR = color('#ecf0f1');



const green = GREEN_COLOR.hexString();
const blue = BLUE_COLOR.hexString();
const red = RED_COLOR.hexString();
const orange = ORANGE_COLOR.hexString();
const gray = GRAY_COLOR.hexString();
const violet = VIOLET_COLOR.hexString();

const styles = {
    green: {
        backgroundColor: green,
    },
    blue: {
        backgroundColor: blue
    },
    red: {
        backgroundColor: red
    },
    violet: {
        backgroundColor: violet
    },
    orange: {
        backgroundColor: orange
    },
    gray: {
        backgroundColor: gray
    }

};
const schemes = ['green','blue','red','violet','orange','gray'];

const colors = {
    green:  GREEN_COLOR,
    blue:   BLUE_COLOR,
    red:    RED_COLOR,
    violet: VIOLET_COLOR,
    orange: ORANGE_COLOR,
    gray:   GRAY_COLOR
};
export {schemes};
export {colors};
export default styles;
