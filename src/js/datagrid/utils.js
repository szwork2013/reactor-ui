
import {Children} from 'react';

export function createColumnConfig(props) {

    const children = props.children;
    const cellConfig = [];

    Children.forEach(children, (child)=> {
        if ( !child.props.hidden ) {            
            cellConfig.push(child.props);
        }
    });

    return cellConfig;

}
