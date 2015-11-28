

import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';

export const Modal = (props) => {
    const modalStyle = assign({border: '1px solid #E5E5E5', background: '#FFF', color: '#222'},props.modalStyle);
    const headerStyle = assign({padding: '4px 6px', borderBottom: '1px solid #E5E5E5'});
    const bodyStyle = assign({margin: 4}, props.bodyStyle);

    return <div style={modalStyle}>
        {props.title ? <div style={headerStyle}>{props.title}</div> : null }
        <div style={bodyStyle}>{props.children}</div>
    </div>;
};



Modal.propTypes = {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    title: React.PropTypes.string,
    closeable: React.PropTypes.bool
};

export const renderModal = (modalElement) => {

    const mountPoint = document.createElement('div');
    mountPoint.style.position = 'fixed';
    mountPoint.style.top = '50%';
    mountPoint.style.left = '50%';
    mountPoint.style.transform = 'translate(-50%, -50%)';
    mountPoint.style.maxHeight = 'calc(100% - 100px)';
    document.body.appendChild(mountPoint);

    ReactDOM.render(modalElement, mountPoint);
};



export default renderModal;
