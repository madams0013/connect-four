import React from 'react'

import Column from './Column.js'
import ButtonBar from './ButtonBar.js'

class Board extends React.Component {

    initBoard = () => {
        var matrix = [];
            for(var i=0; i<6; i++) {
                matrix[i] = new Array(7).fill(" ");
            }
        return matrix
    }

    state = {
        rows: this.initBoard(),
        tokensInCol: new Array(7).fill(0),
        player1turn: true,
    }

    handleClick = (index) => {
      if (this.state.tokensInCol[index-1] === 6) {
        alert("Column is full");
      } else {
        let nextRow = 6 - this.state.tokensInCol[index-1] - 1
        let oldMatrix = this.state.rows
        if (this.state.player1turn) {
          oldMatrix[nextRow][index-1] = "X";
        } else {
          oldMatrix[nextRow][index-1] = "O";
        }
        let newTokensInCol = this.state.tokensInCol
        newTokensInCol[index-1] += 1
        this.setState({
          rows: oldMatrix,
          tokensInCol: newTokensInCol,
          player1turn: !this.state.player1turn
        })
      }
    }
  
    render() {
        let status = ""
        if (this.state.player1turn) {
            status = 'Player 1\'s turn';
        } else {
            status = 'Player 2\'s turn';
        }
      
      return (
        <div>
          <div className="status">{status}</div>
          <ButtonBar handleClick={this.handleClick} />
          <Column row={this.state.rows[0]}/>
          <Column row={this.state.rows[1]}/>
          <Column row={this.state.rows[2]}/>
          <Column row={this.state.rows[3]}/>
          <Column row={this.state.rows[4]}/>
          <Column row={this.state.rows[5]}/> 
        </div>
      );
    }
  }
  
export default Board;