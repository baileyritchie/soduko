// functions used throughout game
// exporting isFinished(board), checkErrors(squares), makeGame(board)
function makeSquare(row,col,val,editable,hasError){
  //makes an individual square with data
  return {
    val,
    editable,
    hasError,
    row,
    col
  };
}

function removeAllErrors(board){
  // goes through entire board and clears errors from them
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      board[i][j].hasError = false;
    }
  }
}

export function isFinished(board){
  // check to see if there are no empty squares and no square has an error
  // returns false if not "finished"
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j].val === null || board[i][j].hasError){
        return false;
      }
    }
  }
  return true;
}

export function checkErrors(squares){
  // go through all squares to make sure there are no errors/conflicts that appear
  removeAllErrors(squares);

  // check columns
  for (let j=0; j<9;j++){
    var array = []
    for (let i=0; i<9; i++){
      array.push(squares[i][j]);
    }
    checkErrorsInGroup(array);
  }

  // check rows
  for (let i=0; i<9; i++){
    var array = []
    for (let j=0; j<9; j++){
      array.push(squares[i][j]);
    }
    checkErrorsInGroup(array);
  }
  // check square groups
  var c = squares;
  checkErrorsInGroup([c[0][0], c[0][1], c[0][2], c[1][0], c[1][1], c[1][2], c[2][0], c[2][1], c[2][2]]);
  checkErrorsInGroup([c[3][0], c[3][1], c[3][2], c[4][0], c[4][1], c[4][2], c[5][0], c[5][1], c[5][2]]);
  checkErrorsInGroup([c[6][0], c[6][1], c[6][2], c[7][0], c[7][1], c[7][2], c[8][0], c[8][1], c[8][2]]);

  checkErrorsInGroup([c[0][3], c[0][4], c[0][5], c[1][3], c[1][4], c[1][5], c[2][3], c[2][4], c[2][5]]);
  checkErrorsInGroup([c[3][3], c[3][4], c[3][5], c[4][3], c[4][4], c[4][5], c[5][3], c[5][4], c[5][5]]);
  checkErrorsInGroup([c[6][3], c[6][4], c[6][5], c[7][3], c[7][4], c[7][5], c[8][3], c[8][4], c[8][5]]);

  checkErrorsInGroup([c[0][6], c[0][7], c[0][8], c[1][6], c[1][7], c[1][8], c[2][6], c[2][7], c[2][8]]);
  checkErrorsInGroup([c[3][6], c[3][7], c[3][8], c[4][6], c[4][7], c[4][8], c[5][6], c[5][7], c[5][8]]);
  checkErrorsInGroup([c[6][6], c[6][7], c[6][8], c[7][6], c[7][7], c[7][8], c[8][6], c[8][7], c[8][8]]);
}

function checkErrorsInGroup(arr){
  // takes an array of objects as parameters
  // checks for repeating or null values in a row, square or column
  var checkingDict = {}
  for (let i = 0;i < 9;i++){
    if (arr[i].val !== null && checkingDict.hasOwnProperty(arr[i].val)){
      let repeatedIndex = checkingDict[arr[i].val];
      arr[i].hasError = true;
      arr[repeatedIndex].hasError = true;
    }
    checkingDict[arr[i].val] = i;
  }  
}

export function makeGame(board){
  // take the board contents as a string of numbers
  var game = []
  for (let i = 0; i < 9;i++){
    var row = []
    for (let j = 0; j < 9;j++){
      row.push(makeSquare(i,j,board[i][j],board[i][j] === null || board[i][j] === undefined,false));
    }
    game.push(row);

  }
  return game;
}


