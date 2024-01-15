import React from 'react';
import Board from '../board/Board';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            penColor: 'blue', // Set an initial color
        };
    }

    handleColorChange = (event) => {
        const newColor = event.target.value;
        this.setState({ penColor: newColor });
    };

    render() {
        return (
            <div className='container'>
                <div className='color-picker-container'>
                    <input type='color' value={this.state.penColor} onChange={this.handleColorChange} />
                </div>

                <div className='board-container'>
                    <Board penColor={this.state.penColor} />
                </div>
            </div>
        );
    }
}

export default Container;
