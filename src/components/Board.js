import React,{Component}  from 'react';
import Square from './Square';
import '../App.css';
import BlankSquare from './BlankSquare';
// exporting isFinished(board), checkErrors(squares), makeGame(board);
import {makeGame, isFinished, checkErrors} from './Sodoku';

// TODO make Board a class component
// create a "process puzzle" function to be used in Board (to render props for individual Square)

class Board extends Component{
  getSquareData = (board) => {
    let arr = [];
    board.map((i) => {
      i.map((j) => {
        arr.push(j);
      });
    });
    return arr;
  }
  
  render(){
    const board = this.props.board;
    const squares = this.getSquareData(board);
    
    return (
      <>
      <div className="board-main">
        <table>
          <tbody className="square-group">
            {this.props.isLoading ? <h1>IS LOADING</h1> : squares.map((i)=> <Square newSquare={this.props.addSquare} data={i} key={[i.row,i.col]}/>)}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={this.props.refresh} className="btn">Create New Puzzle</button>
        <button className="btn" onClick={this.props.checkBoard}>Finish Board</button>
      </div>
      </>
      );
  }
}


export default Board;