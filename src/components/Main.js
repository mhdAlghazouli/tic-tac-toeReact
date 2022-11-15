import Square from "./Square";
import { useState } from "react";

const Main = (props) => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const winner = calcWinner(square);
  let status;
  if(winner){
    status = "winner: " + winner;
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "block";
  }
  
  const renderSquare = (val) => {
    return(
      <Square value={square[val]} onClick={() => handleClick(val)}/>
    )
  }

  const handleClick = (val) => {
    const squares = square.slice();

    if(square[val] === null){
      squares[val] = x ? "x" : "o";
      setSquare(squares);
      setX(!x);
    }else{
      alert("can't do that")
    }
  }

  function calcWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i= 0 ; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  return ( 
    <>
    
    <div id="a">
      <h1>Tic Tac Toe</h1>
        <div style={{display: "flex", justifyContent: "center"}}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      
    </div>
        <h2 id="b" style={{display: "none"}}>
          {status}
        </h2>
    </>
  );
}

export default Main;