import React from 'react'
import Cell from './Cell'

const Row = (props) => {
  const cells = props.elements.map((e, index) => {
    return (
      <Cell
        data={e}
        row={props.row}
        col={index}
        tick={(row, col) => props.tick(row, col)}
        pieces_win={props.pieces_win}
      />
    )
  })

  return cells
}

export default Row
