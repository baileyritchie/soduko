import React from 'react';
import '../App.css';

const Square = (props) => {
  let styles = [];
  if(props.data.row === 2 || props.data.row === 5){
    styles.push('bottom-border');
  } 
  if (props.data.col === 2 || props.data.col === 5){
    styles.push('right-border');
  }
  if (props.data.editable){
    return (<td className={`square-form `+ styles.join(' ')}>
      <form /*onSubmit={ props.newSquare method here}*/>
        <input type="text" placeholder="" className="editable"></input>
      </form>
    </td>);
  }else {
    return <td className={`square-form `+ styles.join(' ')} >{props.data.val}</td>
  }

}


export default Square;