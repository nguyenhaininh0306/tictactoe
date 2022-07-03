import React from 'react'
import { pieces } from '../../constants/action.types'

const Cell = (props) => {
  let my_class_css =
    props.data === pieces.O
      ? 'not-focusable btn btn-default btnO btn-piece'
      : props.data === pieces.X
      ? 'not-focusable btn btn-default btnX btn-piece'
      : 'not-focusable btn btn-default btn-piece'
  if (props.pieces_win !== null) {
    for (var i = 0; i < props.pieces_win.length; i++) {
      if (
        props.pieces_win[i][0] === props.row &&
        props.pieces_win[i][1] === props.col
      ) {
        my_class_css = my_class_css.concat(' btn-win')
      }
    }
  }

  return (
    <button
      className={my_class_css}
      onClick={() => {
        if (props.data === null) {
          props.tick(props.row, props.col)
        }
      }}
    >
      {props.data}
    </button>
  )
}

export default Cell
