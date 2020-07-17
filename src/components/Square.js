import React from 'react';
import '../App.css';
import {removeAllErrors} from './Sodoku';

class Square extends React.Component{
  createStyles = () => {
    let styles = [];
    if(this.props.data.row === 2 || this.props.data.row === 5){
      styles.push(' bottom-border');
    } 
    if (this.props.data.col === 2 || this.props.data.col === 5){
      styles.push(' right-border');
    }
    if (this.props.data.hasError === true){
      styles.push(' has-error');
    }
    return styles;
  }
  handleChange = (e) => {
    const squareVal = e.target.value;
    if (this.iscorrectNumber(squareVal)){
      const row = this.props.data.row;
      const col = this.props.data.col;
      this.props.newSquare(row,col,squareVal);
    }
  }
  iscorrectNumber = (val)=> {
    return ( val === '' || (val.length === 1 && !isNaN(val)));
  }
  render(){
    return(
      <>
        {this.props.data.editable? 
            <td className={`square-form`+ this.createStyles().join(' ')}>
               <input onChange={this.handleChange} type="text" placeholder=""className={this.props.data.hasError ? `has-error editable` : `editable`}></input>
           </td>:<td className={`square-form `+ this.createStyles().join(' ')}>{this.props.data.val}</td>}
      </>
    );

    
  }

}




export default Square;