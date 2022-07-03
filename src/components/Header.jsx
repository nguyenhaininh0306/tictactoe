import React from 'react'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-faded'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#nav-content'
        aria-controls='nav-content'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <a className='navbar-brand' href='/'>
        Game CARO
      </a>
    </nav>
  )
}

export default Header
