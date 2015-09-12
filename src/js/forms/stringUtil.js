


const upperCaseFirstLetter = function(text) {
    if ( text ) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
};
const createLabel = function(labelText) {

    if ( labelText ) {
        return upperCaseFirstLetter(labelText.split('').map( ch => {
            if ( ch === ch.toUpperCase() ) {
                return " " + ch;
            } else {
                return ch;
            }
        }).reduce( (prev,current)=> {
            return prev + current;
        },""));
    }
    return "";

};

const stringUtil = { createLabel };

export default stringUtil;
