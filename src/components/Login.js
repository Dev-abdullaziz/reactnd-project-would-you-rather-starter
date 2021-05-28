import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../actions/authedUser'

class Login extends Component {
    state = {
        toHome: false
    }
    
    selectUser(e) {
        const { dispatch } = this.props
        e.preventDefault()
        if(this.select.value !== 'none') {
            dispatch(signIn(this.select.value))
            this.setState({
                toHome: true
            })
        } else {
            alert('Please choose a user to continue')
            
        }
    }

    render () {
        if(this.state.toHome === true) {
            return <Redirect to='/' exact/>
        }

        return (
            <div className='login'>
                <div className='loginHead'>
                    <h3>Welcome to the Would You Rather App!</h3>
                    <p>Please sign in to continue</p>
                </div>
                <div>
                    <img src="https://img.icons8.com/dusk/64/000000/login-rounded-right.png" alt='Login icon'/>
                    <h4>Sign In</h4>
                    <form>
                        <select name='user' ref={select => this.select = select}>
                            <option value='none'>Select User</option>
                            <option value='sarahedo'>Sarah Edo</option>
                            <option value='tylermcginnis'>Tyler McGinnis</option>
                            <option value='johndoe'>John Doe</option>
                        </select>
                        <button className='loginBtn' onClick={(event) => this.selectUser(event)}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Login)