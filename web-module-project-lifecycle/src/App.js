import './App.css'
import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import FollowerCard from './FollowerCard'

class App extends React.Component {

  state = {
    // currentUser: [],
    user: [],
    followers: [],
  }

  componentDidMount() {
    // this.setState({
    //   ...this.state, currentUser: ['victoriatrac']
    // })

    axios.get('https://api.github.com/users/victoriatrac')
      .then(r => {
        console.log(r.data)
        this.setState({
          ...this.state, user: r.data
        })
      })
      .catch(e => {
        console.error('unable to fetch user: ', e.message)
      })

    axios.get('https://api.github.com/users/victoriatrac/followers')
      .then(r => {
        console.log(r.data)
        this.setState({
          ...this.state, followers: r.data
        })
      })
      .catch(e => {
        console.error('unable to fetch followers: ', e.message)
      })
  }
  
  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        {this.state.followers.length === 0 && <div>there are no followers to show</div>}
        <FollowerCard followers={this.state.followers} />
      </div>
    )
  }
}

export default App
