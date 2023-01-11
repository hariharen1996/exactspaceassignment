import './App.css'
import {Switch, Route} from 'react-router-dom'
import MainRoute from './components/MainRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={MainRoute} />
    </Switch>
  </>
)

export default App
