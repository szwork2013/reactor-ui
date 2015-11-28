
import {colors,schemes} from '../baseStyle';

const BtnStyles =  {
    Btn : {
        color: 'inherit',
        border: '1px solid #EEE',
        backgroundColor: '#FFF',
        display: 'inline-block',
        padding: '5px 10px',
        fontSize: 12,
        lineHeight: 1.5,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        cursor: 'pointer',
        fontWeight: 700
    },
    BtnDisabled: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
        filter: 'alpha(opacity=65)',
        opacity: 0.65
    }
};


schemes.forEach( scheme => {
    BtnStyles[scheme] = {
        color: '#FFF',
        border: '1px solid ' + colors[scheme].clone().darken(0.1).hexString()
    };
    BtnStyles[scheme+'Hovered'] = {
        backgroundColor:  colors[scheme].clone().darken(0.05).hexString()
    };
    BtnStyles[scheme+'Active'] = {
        backgroundColor:  colors[scheme].clone().darken(0.15).hexString()
    };

});

export default BtnStyles;
