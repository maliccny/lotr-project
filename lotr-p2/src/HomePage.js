import React, { Component } from 'react'
import axios from "axios"


class HomePage extends Component {
  constructor() {
    super()

    this.state = {
      nextData: {},
      links: {},
      reddit: {},
      patch: {}
    }
  }

  async componentDidMount() {
    const data = await axios('https://api.spacexdata.com/v4/launches/next')
    // console.log(data.data)
    // console.log(data.data.links)
    // console.log(data.data.links.reddit)
    // console.log(data.data.links.patch)
    

    this.setState({
      nextData: data.data,
      links: data.data.links,
      reddit: data.data.links.reddit,
      patch: data.data.links.patch
    })
  }

  render() {
    return (
      <>
        <div>
          <img src={this.state.patch.small} alt="pic of mission patch"></img>
          <p>Mission Name: {this.state.nextData.name}</p>
          <p>Mission Details: {this.state.nextData.details}</p>
          <p>Mission Date: {this.state.nextData.date_local}</p>
          <ul className="contact-link-nav">
            <li><a href={this.state.reddit.launch} title="Reddit Discussion" target="_blank" rel="noopener noreferrer">Reddit Discussion</a></li>
            <li><a href={this.state.links.wikipedia} title="SpaceX Wikipedia" target="_blank" rel="noopener noreferrer">SpaceX Wikipedia</a></li>
            <li><a href={this.state.reddit.media} title="Pics of Launch" target="_blank" rel="noopener noreferrer">Launch Pics</a></li>
          </ul>
          <iframe width="620" height="315"
            src={`https://www.youtube.com/embed/${this.state.links.youtube_id}`} title="Launch Live Feed">
          </iframe>
        </div>
      </>
    )
  }
}

export default HomePage