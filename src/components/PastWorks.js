import React from 'react';
import Modal from './Modal';

class PastWorks extends React.Component {
    render() {
        // Set styles (for dynamic visibility)
        let style = {
            visibility: this.props.numWorks > 0 ? 'visible' : 'hidden'
        }

        return (
            <div>
                <div style={style} className='Past-works'>
                    <h3>Past Works</h3>
                    <table className='Past-works-table'>
                        <tbody>{this.props.worksRows}</tbody>
                    </table>
                </div>
                <Modal 
                    text={this.props.modalText} 
                    visible={this.props.modalVisible}
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
}

export default PastWorks;