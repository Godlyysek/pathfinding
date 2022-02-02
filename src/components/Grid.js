import React, { Component } from 'react';

export default class Grid extends Component {

    

  render() {
    
    let arr = [];
    
    for (let i = (this.props.row * 30); i < (this.props.row * 30 + 30); i++) {
        arr.push( <div className='block' id={'id'+(i + 1).toString()}  onClick="select(this.id)">{(i + 1).toString()}</div> )
    }
    
    function select(id){
        
    }
    

    return (
        <div>
            {arr}
        </div>
    );
  }
}
