import React from 'react'

import Square from './Square.js'

class Column extends React.Component {

    renderSquare(i) {
        return <Square filled={i}/>;
      }

    render() {
        return (
            <div className="board-col">
                {this.renderSquare(this.props.row[0])}
                {this.renderSquare(this.props.row[1])}
                {this.renderSquare(this.props.row[2])}
                {this.renderSquare(this.props.row[3])}
                {this.renderSquare(this.props.row[4])}
                {this.renderSquare(this.props.row[5])}
                {this.renderSquare(this.props.row[6])}
          </div>
        )
    }

}

export default Column;
