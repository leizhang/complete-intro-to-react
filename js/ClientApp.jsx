const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
// destruct
const {Router, Route, hashHistory} = require('react-router')
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing}/>
    <Route path='/search' component={Search}/>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
