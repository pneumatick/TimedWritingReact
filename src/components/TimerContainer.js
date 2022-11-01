import React from 'react';
import Timer from './Timer';

// Unit: seconds
const VERY_SHORT = 60;
const SHORT = 300;
const MODERATE = 600;
const LONG = 1800;
const VERY_LONG = 3600;

class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: SHORT,
            prevTime: SHORT,
            active: false,
            interval: null
        };

        this.changeTime = this.changeTime.bind(this);
    }

    changeTime(e) {
        let selection = e.target.value;

        switch (selection) {
            case 'very-short':
                this.setState({ 
                    time: VERY_SHORT,
                    prevTime: VERY_SHORT
                });
                break;
            case 'short':
                this.setState({ 
                    time: SHORT,
                    prevTime: SHORT
                });
                break;
            case 'moderate':
                this.setState({ 
                    time: MODERATE,
                    prevTime: MODERATE
                });
                break;
            case 'long':
                this.setState({ 
                    time: LONG,
                    prevTime: LONG
                });
                break;
            case 'very-long':
                this.setState({ 
                    time: VERY_LONG,
                    prevTime: VERY_LONG
                });
                break;
            default:
                console.log(`Unexpected selection: ${selection}`);
                break;
        }
    }

    componentDidUpdate() {
        if (!this.props.disabled && !this.state.active) {
            let interval = setInterval(() => {
                this.setState({ time: this.state.time - 1 });
            }, 1000);
            this.setState({ 
                active: true, 
                interval: interval 
            });
        }
        else if ((this.props.disabled && this.state.active) || this.state.time <= 0) {
            clearInterval(this.state.interval);
            this.setState({ 
                time: this.state.prevTime, 
                active: false 
            });
            if (this.state.time <= 0) { this.props.toggleWriting(); }
            this.props.saveWork();
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div className='Timer-container'>
                <Timer 
                    writeTime={this.state.time}
                    started={!this.props.disabled}
                    onClick={this.props.toggleWriting} 
                    onChange={this.changeTime}
                />
            </div>
        );
    }
}

export default TimerContainer;