import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as home_actions from '../actions/HomeActions'
import Home from '../components/Home'
import { isWin } from './../algorithm/index'
import { pieces } from '../constants/action.types'

const HomeContainer = (props) => {
  const [count, setCount] = useState(0)
  const [is_win, setIs_win] = useState(-1)
  const [pieces_win, setPieces_win] = useState(null)

  const tick = (row, col) => {
    if (is_win === 1) {
      return
    }

    //count number of tick
    let count_tmp = count + 1
    setCount(count_tmp)

    //update board
    let array_new = [...props.array_board]
    array_new[row][col] = props.piece_current
    props.actions.tick(array_new)

    //check win
    const win = isWin(array_new, row, col, props.piece_current)
    if (win.length > 0 && win.length <= 5) {
      setIs_win(1)
      setPieces_win(win)
    } else if (count_tmp === props.number_cell * props.number_cell) {
      setIs_win(0)
      alert('Hai bạn đã hòa nhau')
    } else {
      props.actions.switch_piece(
        props.piece_current === pieces.X ? pieces.O : pieces.X
      )
    }
  }

  const reset_map = () => {
    props.actions.init_array(
      Array(props.number_cell)
        .fill(null)
        .map(() => Array(props.number_cell).fill(null))
    )

    props.actions.switch_piece(pieces.X)
    setCount(0)
    setIs_win(-1)
    setPieces_win(null)
  }

  return (
    <Home
      setNumberCell={(numberCell) => {
        const number_cell = parseInt(numberCell)
        props.actions.set_number_cell(number_cell)
        props.actions.init_array(
          Array(number_cell)
            .fill(null)
            .map(() => Array(number_cell).fill(null))
        )
      }}
      array_board={props.array_board}
      piece_current={props.piece_current}
      is_win={is_win}
      pieces_win={pieces_win}
      tick={(row, col) => tick(row, col)}
      reset_map={() => reset_map()}
    />
  )
}

const mapStateToProps = (state) => ({
  number_cell: state.main.number_cell,
  array_board: state.main.array_board,
  piece_current: state.main.piece_current,
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(home_actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
