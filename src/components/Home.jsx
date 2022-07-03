import React, { useState } from 'react'
import Row from './board/Row'
import Footer from './Footer'
import Header from './Header'
import CountDownTimer from './timer/CountDownTimer'

const Home = (props) => {
  const [numberCell1, setNumberCell1] = useState(null)
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')

  return (
    <>
      <div className='container-fluid'>
        <Header />

        {props.array_board === null ? (
          <div>
            <div className='input-custom'>
              <input
                type='number'
                placeholder='CELL'
                min={'30'}
                max={'40'}
                required
                onChange={(e) => setNumberCell1(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    if (
                      numberCell1 === null ||
                      (!Number.isInteger(numberCell1) &&
                        parseInt(numberCell1) < 30) ||
                      parseInt(numberCell1) > 40
                    ) {
                      alert('Invalid data')
                      return
                    }

                    props.setNumberCell(numberCell1)
                  }
                }}
              />
            </div>

            <div className='player'>
              <div className='player1'>
                <p>Player 1</p>
                <input
                  type={'text'}
                  placeholder='Name'
                  onChange={(e) => setPlayer1(e.target.value)}
                />
                <p>
                  Tick <span>X</span>
                </p>
              </div>

              <div className='player2'>
                <p>Player 2</p>
                <input
                  type={'text'}
                  placeholder='Name'
                  onChange={(e) => setPlayer2(e.target.value)}
                />
                <p>
                  Tick <span>O</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='board'>
            <div className='flex-1'>
              <div className=' information'>
                <p className='title'>INFORMATION</p>
                <p>ACTIVE: {props.piece_current}</p>
              </div>

              <div className='player-current'>
                <div className='player-current-1'>
                  <p>Player 1</p>
                  <p>{player1}</p>
                  <span>Tick X</span>
                </div>

                <div className='player-current-2'>
                  <p>Player 2</p>
                  <p>{player2}</p>
                  <span>Tick O</span>
                </div>
              </div>

              {/* <div className='countdown-timer'>
                <span>
                  {minute < 10 ? `0${minute}` : minute}:
                  {second < 10 ? `0${second}` : second}
                </span>
              </div> */}
              <CountDownTimer
                reset_map={props.reset_map}
                is_win={props.is_win}
                pieces_current={props.piece_current}
              />
            </div>

            <div className='fetch-board'>
              {props.array_board.map((e, index) => {
                return (
                  <div key={index}>
                    <Row
                      elements={e}
                      tick={(row, col) => props.tick(row, col)}
                      row={index}
                      pieces_win={props.pieces_win}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Home
