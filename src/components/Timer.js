import React from 'react';

const MINUTE = 60;
const HOUR = 3600;

class Timer extends React.Component {
    render() {
        let seconds = this.props.writeTime % MINUTE;
        let minutes = Math.floor((this.props.writeTime / MINUTE) % HOUR);

        return (
            <div className='Timer'>
                <button onClick={this.props.onClick}>
                    {this.props.started ? "Finish" : "Start"}
                </button>
                
                {/* 
                // Plain English format
                <p>
                    {minutes} Minute{minutes !== 1 ? "s" : ""}
                </p>
                <p>
                    {seconds} Second{seconds !== 1 ? "s" : ""}
                </p>
                */}
                <div>
                    <select 
                        className='times' 
                        disabled={this.props.started}
                        defaultValue='short' 
                        onChange={this.props.onChange}
                    >
                        <option value='very-short'>Very short</option>
                        <option value='short'>Short</option>
                        <option value='moderate'>Moderate</option>
                        <option value='long'>Long</option>
                        <option value='very-long'>Very long</option>
                    </select>
                    <p>
                        {"Remaining Time: "}
                        {minutes >= 10 ? minutes : `0${minutes}`}
                        {":"}
                        {seconds >= 10 ? seconds : `0${seconds}`}
                    </p>
                </div>
            </div>
        );
    }
}

export default Timer;