import { useEffect, useState } from "react";
import { Square } from "./square";
import styles from "../styles/board.module.css";

const Board = ({ dimension }) => {
  const [boggleBoard, setBoggleBoard] = useState([]);

  const [boardFilled, setBoardFiller] = useState(false);
  useEffect(() => {
    let newBoard = [];
    for (let i = 0; i < dimension; i++) {
      newBoard[i] = [];
      for (let j = 0; j < dimension; j++) {
        newBoard[i][j] = "";
      }
    }

    setBoggleBoard(
      newBoard.map((row, i) => {
        return row.map((square, j) => {
          return "*";
        });
      })
    );
  }, []);

  useEffect(() => {
    checkFinished();
  }, [boggleBoard]);

  const checkFinished = () => {
    setBoardFiller(
      boggleBoard.every((row, i) => {
        return row.every((square, j) => {
          return boggleBoard[i][j] !== "*";
        });
      })
    );
  };

  const handleInputChange = (targetI, targetJ, value) => {
    let newBoard = boggleBoard;
    console.log(targetI, "J: ", targetJ);

    setBoggleBoard(
      boggleBoard.map((row, currI) => {
        return row.map((square, currJ) => {
          console.log("Tar i ", targetI, "curri ", currI);
          console.log("Tar j ", targetJ, "currj ", currJ);
          if (targetI === currI && targetJ === currJ) {
            return value;
          } else {
            return boggleBoard[currI][currJ];
          }
        });
      })
    );
  };

  //this will eventually implement the logic in boggle_solver.java
  //i just need to figure out how to convert the code to js.
  const solveBoggle = () => {
    const mySet1 = new Set();
  };

  return (
    <div className={styles.board_container}>
      {boggleBoard.map((row, i) => {
        return (
          <div className={styles.row}>
            {row.map((square, j) => {
              return (
                <Square i={i} j={j} handleInputChange={handleInputChange} />
              );
            })}
          </div>
        );
      })}
      {boardFilled ? (
        <button onClick={solveBoggle}>Solve Boggle!</button>
      ) : null}
    </div>
  );
};

export { Board };
