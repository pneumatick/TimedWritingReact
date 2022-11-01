import React from 'react';
import PastWorks from './PastWorks';

class PastWorksContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalText: "",
            modalVisible: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(e) {
        let work;
        // Handle clicks on p and td, in that order
        if (e.target.className === 'work-preview') {
            work = e.target.innerHTML;
        }
        else {
            work = e.target.children[0].innerHTML;
        }
        this.setState({ 
            modalText: work,
            modalVisible: true
        });
    }

    handleClose(e) {
        this.setState({ modalVisible: false });
    }

    render() {
        // Shortening props names
        let numWorks = this.props.numWorks;
        let works = this.props.works;

        // Preparing the works for insertion into the table
        let workElems = works.map((work, num) => {
            return (
                <td key={num} index={num} onClick={this.handleClick}>
                    <p className='work-preview'>{work}</p>
                </td>
            );
        });
        let worksRows = [];
        for (let i = 0; i < numWorks; i += 3) {
            worksRows.push(
                <tr key={i}>
                    {workElems.slice(i, i+3)}
                </tr>
            );
        }

        return (
            <PastWorks 
                numWorks={numWorks}
                worksRows={worksRows}
                modalText={this.state.modalText} 
                modalVisible={this.state.modalVisible}
                onClick={this.handleClose}
            />
        );
    }
}

export default PastWorksContainer;