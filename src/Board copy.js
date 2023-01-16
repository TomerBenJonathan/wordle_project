import {useState, useEffect} from 'react';

export function Board(props){

  const [cellsValue, setCellsValue] = 
          useState([  
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ]);

  
  const [cellsColor, setCellsColor] = 
        useState([  
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                ]);

  const [cellsBorderColor, setCellsBorderColor] = 
        useState([  
                    ["red",   "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                    ["black", "black", "black","black","black"],
                ]);
        


  const countCharInString = (char, str) => str.split(char).length;
  

  // // Examples:
  // // 1) secretWord = broom 
  // //    arrayCharsInRow = oxo    ==>    yellow, gray, green
  // //    arrayCharsInRow = oxoo    ==>   gray, gray, green, green
  // //
  // // 2) secretWord = broom 
  // //    arrayCharsInRow = xyooo   ==>   gray, gray, green, green, gray
  // const changeTooManyYellowsToGray = (arrayCharsInRow, secretWord, rowColors) => {
  //     console.log( "===", "calling changeTooManyYellowsToGray()");
  //     let boxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+1)));
  //     arrayCharsInRow.forEach(function(currentChar,i) {
  //         console.log("=== boxesRow[i] bgcolor=", boxesRow[i].style.backgroundColor);
  //         if (boxesRow[i].style.backgroundColor === "yellow")
  //         {
  //             let countCharInGuessedRow = countCharInString(currentChar, arrayCharsInRow.join(""));
  //             let countCharInSecretWord = countCharInString(currentChar, secretWord);

  //             console.log("==== yellow:  i=", i, " countCharInGuessedRow=", countCharInGuessedRow, " countCharInSecretWord=", countCharInSecretWord);

  //             if (countCharInGuessedRow > countCharInSecretWord)
  //             {
  //               boxesRow[i].style.color = "white";
  //               boxesRow[i].style.backgroundColor = "gray";
  //             }
  //         }
  //     });
  // }
 
  const paintCells = () => {

  //     let boxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+1)));

        let secretWord = props.secretWords[props.currentSecretWordIndex];

  //     let rowColors = ["GRAY", "GRAY", "GRAY", "GRAY", "GRAY"];

        let cellsColorTemp = [...cellsColor];

        props.arrayCharsInRow.forEach(function(currentChar,i) {
  //       boxesRow[i].innerHTML = currentChar;
            //cellsValueTemp[props.currentRow][i] = currentChar;

  //       // console.log(value, );
  //       //let secretWord = props.secretWords[props.currentSecretWordIndex];

        if (currentChar === secretWord.charAt(i))
        {
          //boxesRow[i].style.color = "green";
          //rowColors[i] = "GREEN";
          cellsColorTemp[props.currentRow][i] = "green";
        }
        else if (secretWord.includes(currentChar)) {

            //boxesRow[i].style.color = "yellow";
            //rowColors[i] = "YELLOW";
            cellsColorTemp[props.currentRow][i] = "yellow";
        }
        else
        {
          //boxesRow[i].style.color = "gray";
          //rowColors[i] = "GRAY";
          cellsColorTemp[props.currentRow][i] = "gray";
        }
       });

  //     changeTooManyYellowsToGray(props.arrayCharsInRow, secretWord, rowColors);

  }

  useEffect(() => {
      console.log("In Board useEffect. Props = ", props);
      // console.log("line-" + props.currentRow+1, typeof(props.currentRow));
      // let currentRowStr = props.currentRow.toString();
      // let currentRow = parseInt(currentRowStr, 10) ;
      // console.log("props.currentRow=", props.currentRow);
      
      
      //let boxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+1)));
      
      let cellsValueTemp = [...cellsValue];
      let cellsBorderColorTemp = [...cellsBorderColor];
      
      //boxesRow.forEach(function(value,i)box => box.innerHTML="x");
      console.log("props.currentRow=",props.currentRow);
      console.log("props.arrayCharsInRow.length=", props.arrayCharsInRow.length);
      if (props.arrayCharsInRow.length === 0)
      {
        //boxesRow[0].style.border = "2px solid red";
        cellsBorderColorTemp[props.currentRow][0] = "red";
      }

      // props.arrayCharsInRow.forEach(function(currentChar,i) {
      //   boxesRow[i].innerHTML = currentChar;

      props.arrayCharsInRow.forEach(function(currentChar,i) {
           //boxesRow[i].innerHTML = currentChar;
           
           cellsValueTemp[props.currentRow][i] = currentChar;


      //   // let secretWord = props.secretWords[props.currentSecretWordIndex];

      //   // if (currentChar === secretWord.charAt(i))
      //   // {
      //   //   boxesRow[i].style.color = "green";
      //   // }
      //   // else if (secretWord.includes(currentChar)) {

      //   //   boxesRow[i].style.color = "yellow";
          
      //   // }
      //   // else
      //   // {
      //   //   boxesRow[i].style.color = "gray";
      //   // }

      //   boxesRow[i].style.border = "2px solid #301ad1";
      let cellsBorderColorTemp = [...cellsBorderColor];
      cellsBorderColorTemp[props.currentRow][i] = "#301ad1";
      

        if (i<4)
        {
          //boxesRow[i+1].style.border = "2px solid red"
          let cellsBorderColorTemp = [...cellsBorderColor];
          cellsBorderColorTemp[props.currentRow][i+1] = "red";
        }
        else if (i===4 && props.currentRow<=4)
        {
          paintCells();
          //setTimeout(()=>alert("Line is done"), 50);
          
        }

        if (i===4 && props.currentRow<4)
        {
          //let nextBoxesRow = Array.from(document.getElementsByClassName("line-" + (props.currentRow+2)));
          //nextBoxesRow[0].style.border = "2px solid red"
          let cellsBorderColorTemp = [...cellsBorderColor];
          cellsBorderColorTemp[props.currentRow+1][0] = "red";
        }

        setCellsValue(cellsValueTemp);
        setCellsBorderColor(cellsBorderColorTemp);

      });
  }, [props])


  return(
    <div className="game-board">
        <div className="game-board-inner">
          <div>{props.arrayCharsInRow}</div>  
          <div className="game-row">
            <div className="game-box line-1 col-2" style={{color: cellsColor[0][0], border: "2px solid " + cellsBorderColor[0][0]}}>{cellsValue[0][0]}</div>
            <div className="game-box line-1 col-2" style={{color: cellsColor[0][1], border: "2px solid " + cellsBorderColor[0][1]}}>{cellsValue[0][1]}</div>
            <div className="game-box line-1 col-2" style={{color: cellsColor[0][2], border: "2px solid " + cellsBorderColor[0][2]}}>{cellsValue[0][2]}</div>
            <div className="game-box line-1 col-2" style={{color: cellsColor[0][3], border: "2px solid " + cellsBorderColor[0][3]}}>{cellsValue[0][3]}</div>
            <div className="game-box line-1 col-2" style={{color: cellsColor[0][4], border: "2px solid " + cellsBorderColor[0][4]}}>{cellsValue[0][4]}</div>
          </div>
          <div className="game-row">
            <div className="game-box line-2 col-2" style={{color: cellsColor[1][0], border: "2px solid " + cellsBorderColor[1][0]}}>{cellsValue[1][0]}</div>
            <div className="game-box line-2 col-2" style={{color: cellsColor[1][1], border: "2px solid " + cellsBorderColor[1][1]}}>{cellsValue[1][1]}</div>
            <div className="game-box line-2 col-2" style={{color: cellsColor[1][2], border: "2px solid " + cellsBorderColor[1][2]}}>{cellsValue[1][2]}</div>
            <div className="game-box line-2 col-2" style={{color: cellsColor[1][3], border: "2px solid " + cellsBorderColor[1][3]}}>{cellsValue[1][3]}</div>
            <div className="game-box line-2 col-2" style={{color: cellsColor[1][4], border: "2px solid " + cellsBorderColor[1][4]}}>{cellsValue[1][4]}</div>
          </div>
          <div className="game-row">
            <div className="game-box line-3 col-2" style={{color: cellsColor[2][0], border: "2px solid " + cellsBorderColor[2][0]}}>{cellsValue[2][0]}</div>
            <div className="game-box line-3 col-2" style={{color: cellsColor[2][1], border: "2px solid " + cellsBorderColor[2][1]}}>{cellsValue[2][1]}</div>
            <div className="game-box line-3 col-2" style={{color: cellsColor[2][2], border: "2px solid " + cellsBorderColor[2][2]}}>{cellsValue[2][2]}</div>
            <div className="game-box line-3 col-2" style={{color: cellsColor[2][3], border: "2px solid " + cellsBorderColor[2][3]}}>{cellsValue[2][3]}</div>
            <div className="game-box line-3 col-2" style={{color: cellsColor[2][4], border: "2px solid " + cellsBorderColor[2][4]}}>{cellsValue[2][4]}</div>
          </div>
          <div className="game-row">
            <div className="game-box line-4 col-2" style={{color: cellsColor[3][0], border: "2px solid " + cellsBorderColor[3][0]}}>{cellsValue[3][0]}</div>
            <div className="game-box line-4 col-2" style={{color: cellsColor[3][1], border: "2px solid " + cellsBorderColor[3][1]}}>{cellsValue[3][1]}</div>
            <div className="game-box line-4 col-2" style={{color: cellsColor[3][2], border: "2px solid " + cellsBorderColor[3][2]}}>{cellsValue[3][2]}</div>
            <div className="game-box line-4 col-2" style={{color: cellsColor[3][3], border: "2px solid " + cellsBorderColor[3][3]}}>{cellsValue[3][3]}</div>
            <div className="game-box line-4 col-2" style={{color: cellsColor[3][4], border: "2px solid " + cellsBorderColor[3][4]}}>{cellsValue[3][4]}</div>
          </div>
          <div className="game-row">
            <div className="game-box line-5 col-2" style={{color: cellsColor[4][0], border: "2px solid " + cellsBorderColor[4][0]}}>{cellsValue[4][0]}</div>
            <div className="game-box line-5 col-2" style={{color: cellsColor[4][1], border: "2px solid " + cellsBorderColor[4][1]}}>{cellsValue[4][1]}</div>
            <div className="game-box line-5 col-2" style={{color: cellsColor[4][2], border: "2px solid " + cellsBorderColor[4][2]}}>{cellsValue[4][2]}</div>
            <div className="game-box line-5 col-2" style={{color: cellsColor[4][3], border: "2px solid " + cellsBorderColor[4][3]}}>{cellsValue[4][3]}</div>
            <div className="game-box line-5 col-2" style={{color: cellsColor[4][4], border: "2px solid " + cellsBorderColor[4][4]}}>{cellsValue[4][4]}</div>
          </div>
        </div>
      </div>

  )
}