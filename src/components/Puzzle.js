export function makePuzzle(){
  var count = 0;
  while(count<5){
  try{
      
      const board = Array(9).fill(0).map((x) => Array(9).fill(0)); // 2d array filled with zeros
      const rows = Array.from(Array(9).keys()).map(() => new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      const columns = Array.from(Array(9).keys()).map(() => new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      const squares = Array.from(Array(9).keys()).map(() => new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      // now go through the rows and columns to assign random values
      Array.from(Array(9).keys()).forEach((i)=> { //rows
        Array.from(Array(9).keys()).forEach((j) => { // cols
          const currRow = rows[i];
          const currCol = columns[j];
          const squareGroup = squares[findSquare(i,j)];
          // pick values that exist in available row, column and "square" options
          const options = [...currRow].filter( num => currCol.has(num)).filter( num => squareGroup.has(num))
          // now pick a value randomly
          const selected = randomize(options);
          if (!selected){
            count+=1;
            board[i][j] = null;
            // nothing could be selected
          }
          board[i][j] = selected;
          
          // now remove it from the possible values to choose and move onto the next
          currCol.delete(selected);
          currRow.delete(selected);
          squareGroup.delete(selected);
          // finally return a 2d array with numbers
        });
      });
      return board;
    }catch(e){
      console.log('This was caught',e);
      continue;
    }
  }
}

function randomize(choices){
  return choices[Math.floor(Math.random() * choices.length)]
}

function findSquare(row,col){
  let squareNo = Math.floor(row / 3) * 3 + Math.floor( col / 3);
  return squareNo;
}

