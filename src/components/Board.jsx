import React, { useState } from "react"
import { initMap, randomGrid } from "../utils/initMap"
import Block from "../components/Block"
import { KEY, EMPTY_CELL } from "../constants/app.constant"
import Grid from "./Grid"

const Board = () => {
  const [board, setBoard] = useState(initMap())
  console.log(board)

  const setupController = () => {
    document.onkeydown = (e) => {
      let boardClone = [...board]
      let moved = false
      let traverseIndex = 0
      switch (e.keyCode) {
        case KEY.UP:
          for (let i = 3; i >= 1; i--) {
            for (let j = 0; j < 4; j++) {
              if (boardClone[i - 1][j] == 0) {
                boardClone[i - 1][j] = boardClone[i][j]
                boardClone[i][j] = 0
                moved = true
              } else if (boardClone[i - 1][j] == boardClone[i][j]) {
                boardClone[i - 1][j] *= 2
                boardClone[i][j] = 0
                moved = true
              }
            }
          }
          
        // for(let i = 0; i < 4; i++) {
        //     let stack = []
        //     for(let j = 0; j < 4 ; j++) {
        //         stack.push(boardClone[j][i])
        //     }

        //     do {
        //         let head = stack[0]
        //         if(head === EMPTY_CELL) {
        //             stack.shift()
        //         }
        //     } while (stack.length < 5)
            
        // }
          break
        case KEY.DOWN:
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
              if (boardClone[i + 1][j] == 0) {
                boardClone[i + 1][j] = boardClone[i][j]
                boardClone[i][j] = 0
                moved = true
              } else if (boardClone[i + 1][j] == boardClone[i][j]) {
                boardClone[i + 1][j] *= 2
                boardClone[i][j] = 0
                moved = true
              }
            }
          }
          break
        case KEY.LEFT:
          for (let i = 0; i < 4; i++) {
            for (let j = 3; j > 0; j--) {
              if (boardClone[i][j - 1] == 0) {
                boardClone[i][j - 1] = boardClone[i][j]
                boardClone[i][j] = 0
                moved = true
              } else if (boardClone[i][j - 1] == boardClone[i][j]) {
                boardClone[i][j - 1] *= 2
                boardClone[i][j] = 0
                moved = true
              }
            }
          }
          break
        case KEY.RIGHT:
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
              if (boardClone[i][j + 1] == 0) {
                boardClone[i][j + 1] = boardClone[i][j]
                boardClone[i][j] = 0
                moved = true
              } else if (boardClone[i][j + 1] == boardClone[i][j]) {
                boardClone[i][j + 1] *= 2
                boardClone[i][j] = 0
                moved = true
              }
            }
          }
        default:
          break
      }
      if (moved) {
        boardClone = randomGrid(boardClone)
        setBoard(boardClone)
      }
    }
  }

  useState(setupController())
  return (
    <div className="board">
      <Grid></Grid>
      <div className="block-container">
        {board.map((row, i) => {
          return row.map((block, j) => {
            if (block !== 0) return <Block value={block} x={i} y={j} key={i * 4 + j}></Block>
          })
        })}
      </div>
    </div>
  )
}

export default Board
