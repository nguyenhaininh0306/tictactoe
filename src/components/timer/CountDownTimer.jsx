import React, { useEffect, useState } from 'react'
import { pieces } from '../../constants/action.types'
import './CountDownTimer.css'

const CountDownTimer = (props) => {
  const [minute, setMinute] = useState(20)
  const [second, setSecond] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond(second - 1)
      if (second === 0) {
        setSecond(59)
        setMinute(minute - 1)
      }
    }, 1000)

    if (props.is_win === 1) {
      clearInterval(intervalId)
    } else if ((second === 0 && minute === 0) || props.is_win === 0) {
      alert('Hai bạn đã hòa')
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [minute, second])

  const resetMap = () => {
    props.reset_map()
    setMinute(20)
    setSecond(0)
  }

  return (
    <div className='timer'>
      <div className='countdown-timer'>
        <span>
          {minute < 10 ? `0${minute}` : minute}:
          {second < 10 ? `0${second}` : second}
        </span>
      </div>

      <div className='result'>
        {props.is_win === 1 && (
          <div>
            <p>
              Result:{' '}
              {props.is_win === 1 ? (
                <span>
                  {props.pieces_current === pieces.X ? 'Player 1' : 'Player 2'}{' '}
                  WIN
                </span>
              ) : props.is_win === 0 ? (
                <span>DRAW</span>
              ) : null}
            </p>
            <p>
              Time: {19 - minute < 10 ? `0${19 - minute}` : 19 - minute}:
              {60 - second < 10 ? `0${60 - second}` : 60 - second}
            </p>
          </div>
        )}
      </div>

      <button
        type='button'
        onClick={resetMap}
        className='btn btn-primary btn-reset'
      >
        Reset
      </button>
    </div>
  )
}

export default CountDownTimer
