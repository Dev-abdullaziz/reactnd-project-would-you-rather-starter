import React , {Component} from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQ extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    optionChange(e) {
        let optionNum = e.target.name
        this.setState({
            [optionNum]: e.target.value
        })
    }

    submitQuestion(e) {
        e.preventDefault()
        const { dispatch , authedUser } = this.props
        const { optionOne , optionTwo } = this.state

        if(optionOne === '' || optionTwo === '' ) {
            alert('You need to fill all the fields before submitting')
            return
        }

        dispatch(handleSaveQuestion({
            optionOneText:optionOne,
            optionTwoText:optionTwo,
            author: authedUser
        }))
        setTimeout(() => {
            this.setState({
                toHome: true
            })
        }, 1000)

        
    }


    render() {
        if(this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='NewQ'>
                <div className='NewQhead'>
                    <h2>Create New Question</h2>
                </div>
                <div className='NewQbody'>
                    <p>Complete the question</p>
                    <h3>Would you rather ...</h3>
                    <input 
                        name='optionOne' 
                        onChange= {(event) => this.optionChange(event)}
                        value={this.state.optionOne} 
                        type='text' 
                        placeholder='Enter option one text here'
                    />
                    <div className='seperator'>
                        <hr></hr>
                        <span>OR</span>
                        <hr></hr>
                    </div>
                    <input 
                        name='optionTwo' 
                        onChange= {(event) => this.optionChange(event)}
                        value={this.state.optionTwo} 
                        type='text' 
                        placeholder='Enter option two text here'
                    />
                    <button className='NewQbtn' onClick={(event) => this.submitQuestion(event)}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQ)