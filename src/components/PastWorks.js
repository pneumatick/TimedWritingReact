import React from 'react';

class PastWorks extends React.Component {
    render() {
        // Shortening props names
        let numWorks = this.props.numWorks;
        let works = this.props.works;

        // Preparing the works for insertion into the table
        let workElems = works.map((work, num) => {
            return (
                <td key={num}>
                    <p>{work}</p>
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
            <div className='Past-works'>
                <h3>Past Works</h3>
                <table className='Past-works-table'>
                    <tbody>{worksRows}</tbody>
                </table>
            </div>
        );
    }
}

export default PastWorks;