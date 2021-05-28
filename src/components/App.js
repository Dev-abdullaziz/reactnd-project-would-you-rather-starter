import React, {Component, Fragment} from 'react'
import {handleInitialData} from '../actions/shared'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Qpage from './Qpage'
import NewQ from './NewQ'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {

    const { notSigned } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='app'> 
            {notSigned ===  true  ? <Login/> : 
              <Fragment>
                  <Nav />
                  <div style={{paddingTop: 100}}>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/question/:id' component={Qpage} />
                    <Route path='/add' component={NewQ} />
                    <Route path='/leaderboard' component={Leaderboard}/>
                  </div>
              </Fragment>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    notSigned: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
