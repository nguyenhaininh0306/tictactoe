import { Routes, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
      </Routes>
    </div>
  )
}

export default App
