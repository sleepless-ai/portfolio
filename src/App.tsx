import {Home} from './pages/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import {
  Layout
} from './Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App