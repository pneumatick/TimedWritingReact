import React from 'react';

class Modal extends React.Component {
    render() {
        let style = {
            display: this.props.visible ? 'block' : 'none'        
        }

        return (
            <div className="modal" style={style}>
                <div className="modal-elements">
                    <span className="close" onClick={this.props.onClick}>&times;</span>
                    <p className="modal-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Modal;