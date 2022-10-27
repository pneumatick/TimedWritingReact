import React from 'react';

class Notepad extends React.Component {
    render() {
        return (
            <textarea 
                disabled={this.props.disabled} 
                placeholder={this.props.disabled ? "Press 'Start' to write." : "Start writing..."}
                onChange={this.props.onChange}
                value={this.props.value}
            />
        );
    }
}

export default Notepad;