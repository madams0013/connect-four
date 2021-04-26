import React from 'react'

class ButtonBar extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.handleClick(1)}>
                    Column 1
                </button>
                <button onClick={() => this.props.handleClick(2)}>
                    Column 2
                </button>
                <button onClick={() => this.props.handleClick(3)}>
                    Column 3
                </button>
                <button onClick={() => this.props.handleClick(4)}>
                    Column 4
                </button>
                <button onClick={() => this.props.handleClick(5)}>
                    Column 5
                </button>
                <button onClick={() => this.props.handleClick(6)}>
                    Column 6
                </button>
                <button onClick={() => this.props.handleClick(7)}>
                    Column 7
                </button>
            </div>
        )
    }

}

export default ButtonBar;