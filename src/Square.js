import React from 'react';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
            {this.props.filled}
        </button>
      );
    }
  }

export default Square;