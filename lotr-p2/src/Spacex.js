import React, { Component } from 'react'
import axios from "axios"

class Spacex extends Component {
  constructor() {
    super()

    this.state = {
      spaceData: "",
      headquarters: "",
      links: ""
    }
  }

  async componentDidMount() {
    const data = await axios('https://api.spacexdata.com/v4/company')

    this.setState({
      spaceData: data.data,
      headquarters: data.data.headquarters,
      links: data.data.links
    })
  }

  
  render() {
    return (
      <>
        <div>
          <p>Ceo: {this.state.spaceData.ceo}</p>
          <p>CTO of Propulsion: {this.state.spaceData.cto_propulsion}</p>
          <p>About: {this.state.spaceData.summary}</p>
          <p>Founded: {this.state.spaceData.founded}</p>
          <p>Founder: {this.state.spaceData.founder}</p>
          <p>Number of Employees: {this.state.spaceData.employees}</p>
          <p>Address: {this.state.headquarters.address} {this.state.headquarters.city}, {this.state.headquarters.state}</p>
          <ul className="contact-link-nav">
            <li><a href={this.state.links.elon_twitter} title="Elon's Twitter" target="_blank" rel="noopener noreferrer">Elon's Twitter</a></li>
            <li><a href={this.state.links.twitter} title="SpaceX Twitter" target="_blank" rel="noopener noreferrer">SpaceX Twitter</a></li>
            <li><a href={this.state.links.website} title="Official Website" target="_blank" rel="noopener noreferrer">Official Website</a></li>
          </ul>
          
        </div>     
      </>
    )
  }
}

export default Spacex