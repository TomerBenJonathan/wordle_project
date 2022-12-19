import {useEffect} from 'react';

export function Board(props){

  useEffect(() => {
      console.log("In Board useEffect. Props = ", props);
      // console.log("line-" + props.currentRow+1, typeof(props.currentRow));
      // let currentRowStr = props.currentRow.toString();
      // let currentRow = parseInt(currentRowStr, 10) ;
      // console.log("props.currentRow=", props.currentRow);
      let boxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+1)));
      //boxesRow.forEach(function(value,i)box => box.innerHTML="x");
      console.log("props.currentRow=",props.currentRow);
      console.log("props.arrayCharsInRow.length=", props.arrayCharsInRow.length);
      if (props.arrayCharsInRow.length == 0)
      {
        boxesRow[0].style.border = "2px solid red";
      }

      props.arrayCharsInRow.forEach(function(value,i) {
        boxesRow[i].innerHTML = value;
        boxesRow[i].style.border = "2px solid #301ad1";
        if (i<4)
        {
          boxesRow[i+1].style.border = "2px solid red"
        }
        else if (i==4 && props.currentRow<4)
        {
          let nextBoxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+2)));
          nextBoxesRow[0].style.border = "2px solid red"
          setTimeout(()=>alert("Line is done"), 200);
          
        }
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