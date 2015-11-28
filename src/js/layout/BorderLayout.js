
import React from 'react';

/**
 * https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
 */
export function Header(props) {
    return <div style={{flex: 'none'}}>{props.children}</div>;
}

export function East(props) {
    return <div style={{flex: '0 0 ' + props.width}}>{props.children}</div>;
}


export function West(props) {
    return <div style={{flex: '0 0 ' + props.width}}>{props.children}</div>;
}

export function Footer(props) {
    return <div style={{flex: '0 0 ' + props.width}}></div>;
}

export function Content(props) {
    return <div style={{display: 'flex'}}>{props.children}</div>;
}

export default function BorderLayout(props) {

    return <div style={{flexDirection: 'column', display: 'flex', minHeight: '100vh'}}>
        {props.children}
    </div>;

}

export {BorderLayout};
