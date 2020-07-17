import React,{Component} from 'react';
import Board from './Board';
import '../App.css';
import {makePuzzle} from './Puzzle';
import {initial} from './Sample';
// exporting isFinished(board), checkErrors(squares), makeGame(board)
import {makeGame, isFinished, checkErrors,removeAllErrors} from './Sodoku';

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentBoardState:this.createPuzzle(),
      isLoading:false};
    }
  
  refreshPuzzle = (e) => {
    // creates a new puzzle and sets the state when the button is clicked
    console.log('Clicked');
    let result = makeGame(makePuzzle());
    this.setState({currentBoardState:result});
    return result;
  }
  createPuzzle = () =>{
    let game = makeGame(makePuzzle());
    return game;
  }
  addSquare = (row,col,e)=>{
    removeAllErrors(this.state.currentBoardState);
    // first check to see if there are conflicts
    let newBoard = [...this.state.currentBoardState];
    newBoard[row][col].val =  parseInt(e);
    this.setState(checkErrors(newBoard));

    
    // to complete the board make sure the checkErrors board and the 
  }
  checkBoard = () => {
    if (isFinished(this.state.currentBoardState)){
      return true;
    }
  }
  render(){
    return(
      <div className="game-container">
        <h1 className="game-title"> Welcome to Sodoku </h1>
        <Board isLoading={this.state.isLoading}
        board = {this.state.currentBoardState}
        addSquare = {this.addSquare}
        refresh = {this.refreshPuzzle}
        checkBoard = {this.checkBoard}/>
      </div>
    );
  }
}


export default Game;