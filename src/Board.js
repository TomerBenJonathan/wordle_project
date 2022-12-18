import {useEffect} from 'react';

export function Board(props){

  useEffect(() => {
      console.log(props);
      // console.log("line-" + props.currentRow+1, typeof(props.currentRow));
      // let currentRowStr = props.currentRow.toString();
      // let currentRow = parseInt(currentRowStr, 10) ;
      // console.log("props.currentRow=", props.currentRow);
      let boxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+1)));
      //boxesRow.forEach(function(value,i)box => box.innerHTML="x");
      props.arrayCharsInRow.forEach(function(value,i) {
        boxesRow[i].innerHTML = value;
      });
  })


  return(
    <div className="game-board">
        <div className="game-board-inner">
          <div>{props.arrayCharsInRow}</div>  
          <div className="game-row">
            <div className="game-box line-1 col-2"></div>
            <div className="game-box line-1 col-2"></div>
            <div className="game-box line-1 col-2"></div>
            <div className="game-box line-1 col-2"></div>
            <div className="game-box line-1 col-2"></div>
          </div>
          <div className="game-row">
            <div className="game-box line-2 col-2"></div>
            <div className="game-box line-2 col-2"></div>
            <div className="game-box line-2 col-2"></div>
            <div className="game-box line-2 col-2"></div>
            <div className="game-box line-2 col-2"></div>
          </div>
          <div className="game-row">
            <div className="game-box line-3 col-2"></div>
            <div className="game-box line-3 col-2"></div>
            <div className="game-box line-3 col-2"></div>
            <div className="game-box line-3 col-2"></div>
            <div className="game-box line-3 col-2"></div>
          </div>
          <div className="game-row">
            <div className="game-box line-4 col-2"></div>
            <div className="game-box line-4 col-2"></div>
            <div className="game-box line-4 col-2"></div>
            <div className="game-box line-4 col-2"></div>
            <div className="game-box line-4 col-2"></div>
          </div>
          <div className="game-row">
            <div className="game-box line-5 col-2"></div>
            <div className="game-box line-5 col-2"></div>
            <div className="game-box line-5 col-2"></div>
            <div className="game-box line-5 col-2"></div>
            <div className="game-box line-5 col-2"></div>
          </div>
        </div>
      </div>

  )
}