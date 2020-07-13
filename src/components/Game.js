import React,{Component} from 'react';
import Board from './Board';
import '../App.css';
import {makePuzzle} from './Puzzle';
import {initial} from './Sample';
// exporting isFinished(board), checkErrors(squares), makeGame(board)
import {makeGame, isFinished, checkErrors} from './Sodoku';

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentBoardState:initial,
      isLoading:false};
    }
  
  refreshPuzzle = (e) => {
    // creates a new puzzle and sets the state when the button is clicked
    console.log('Clicked');
    let result = makeGame(makePuzzle());
    this.setState({isLoading:true});
    this.setState({currentBoardState:result});
    this.setState({isLoading:true});
    return this.state.currentBoardState;
  }
  addSquare = (row,col,e)=>{
    // first check to see if there are conflicts
    // then change the state of the board, set a new value to square and make it editable
    // this function changes the state of the object to being editable
    let newBoard = [...this.state.currentBoardState];
    /* newBoard[row][col].val =  e.target.value;
    checkErrors(newBoard);
    this.setState({currentBoardState:newBoard}); */
  }
  render(){
    return(
      <div className="game-container">
        <h1 className="game-title"> Welcome to Sodoku </h1>
        <Board isLoading={this.state.isLoading}
        board = {this.state.currentBoardState}
        addSquare = {this.addSquare}
        refresh = {this.refreshPuzzle}/>
      </div>
    );
  }
}


export default Game;