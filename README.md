# Project Overview

## SpaceX-project

https://reverent-brown-efd4e6.netlify.app/

## Project Description

This App showcases information about the next spaceX satelite launch, as well as information about past launches and the rockets used to carry out the missions. 

## API and Data Sample

[SpaceX REST API](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md)

### API Data Sample

```JSON
{
  "fairings": null,
  "links": {
    "patch": {
      "small": "https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png",
      "large": "https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png"
    },
    "reddit": {
      "campaign": "https://www.reddit.com/r/spacex/comments/fjf6rr/dm2_launch_campaign_thread/",
      "launch": "https://www.reddit.com/r/spacex/comments/glwz6n/rspacex_cctcap_demonstration_mission_2_general",
      "media": "https://www.reddit.com/r/spacex/comments/gp1gf5/rspacex_dm2_media_thread_photographer_contest/",
      "recovery": "https://www.reddit.com/r/spacex/comments/gu5gkd/cctcap_demonstration_mission_2_stage_1_recovery/"
    },
    "flickr": {
      "small": [],
      "original": [
        "https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg",
        "https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg",
        "https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg",
        "https://live.staticflickr.com/65535/49934168858_cacb00d790_o.jpg",
        "https://live.staticflickr.com/65535/49934682271_fd6a31becc_o.jpg",
        "https://live.staticflickr.com/65535/49956109906_f88d815772_o.jpg",
        "https://live.staticflickr.com/65535/49956109706_cffa847208_o.jpg",
        "https://live.staticflickr.com/65535/49956109671_859b323ede_o.jpg",
        "https://live.staticflickr.com/65535/49955609618_4cca01d581_o.jpg",
        "https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg",
        "https://live.staticflickr.com/65535/49955609378_9b77e5c771_o.jpg",
        "https://live.staticflickr.com/65535/49956396262_ef41c1d9b0_o.jpg"
      ]
    },
    "presskit": "https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf",
    "webcast": "https://youtu.be/xY96v0OIcK4",
    "youtube_id": "xY96v0OIcK4",
    "article": "https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/",
    "wikipedia": "https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2"
  },
  "static_fire_date_utc": "2020-05-22T17:39:00.000Z",
  "static_fire_date_unix": 1590169140,
  "tdb": false,
  "net": false,
  "window": 0,
  "rocket": "5e9d0d95eda69973a809d1ec",
  "success": true,
  "failures": [],
  "details": "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying two NASA astronauts to the International Space Station. Barring unexpected developments, this mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to the space station and back to Earth and it is the last major milestone for certification of Crew Dragon. Initially the mission duration was planned to be no longer than two weeks, however NASA has been considering an extension to as much as six weeks or three months. The astronauts have been undergoing additional training for the possible longer mission.",
  "crew": [
    "5ebf1b7323a9a60006e03a7b",
    "5ebf1a6e23a9a60006e03a7a"
  ],
  "ships": [
    "5ea6ed30080df4000697c913",
    "5ea6ed2f080df4000697c90b",
    "5ea6ed2f080df4000697c90c",
    "5ea6ed2e080df4000697c909",
    "5ea6ed2f080df4000697c90d"
  ],
  "capsules": [
    "5e9e2c5df359188aba3b2676"
  ],
  "payloads": [
    "5eb0e4d1b6c3bb0006eeb257"
  ],
  "launchpad": "5e9e4502f509094188566f88",
  "auto_update": true,
  "flight_number": 94,
  "name": "CCtCap Demo Mission 2",
  "date_utc": "2020-05-30T19:22:00.000Z",
  "date_unix": 1590866520,
  "date_local": "2020-05-30T15:22:00-04:00",
  "date_precision": "hour",
  "upcoming": false,
  "cores": [
    {
      "core": "5e9e28a7f3591817f23b2663",
      "flight": 1,
      "gridfins": true,
      "legs": true,
      "reused": false,
      "landing_attempt": true,
      "landing_success": true,
      "landing_type": "ASDS",
      "landpad": "5e9e3032383ecb6bb234e7ca"
    }
  ],
  "id": "5eb87d46ffd86e000604b388"
}

```

### Wireframes



https://wireframe.cc/UR5hA

- Landing Page

https://wireframe.cc/g0Nb5u

- Past Launches

https://wireframe.cc/3pzSg2

- Rockets Page

https://wireframe.cc/mNNtO1

- About SpaceX

https://wireframe.cc/NGrwt7

- About Me



#### MVP 

- compont for the home page view
- component for past launches
- component for footer
- component for rockets
- an about the creator component
- about spaceX component 
- implement api call 
- Make the app reactive, with 3 different screen views 


#### MVP Libraries & Dependencies

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | A JavaScript library for building user interfaces |
| React Router | a collection of navigational components |
| Axios | A library to make get requests from an API |


#### MVP Components



```
src
|__ HomePage.jsx
|__ Rockets.jsx
|__ PastLaunches.jsx
|__ AboutMe.jsx
|__ Spacex.jsx
|__ Footer.jsx

```

#### MVP Breakdown

|  Component     |    Type    | state | props | hooks | Description                                  |
| :----------:   | :--------: | :---: | :---: | :---: | :-----------------------------------------   |
|    App.js      |   class    |   n   |   n   |   n   | main component where routes will be located  |
|    HomePage    | class      |   y   |   n   |   n   | Where information on the next launch will be |
|    Rockets     | class      |   y   |   n   |   n   | where the imformation about rockets will be  |
|   PastLaunches | class      |   y   |   n   |   n   | detailed information about past launches     |
|    AboutMe     | functional |   n   |   n   |   n   | an about me page with contact information    |
|     Spacex     | functional |   n   |   n   |   n   | additional information about the company     |
|     Footer     | functional |   n   |   n   |   n   | Footer which will be displayed on all pages. |



#### PostMVP 

- implement a second API for weather 
- add a countdown clock



## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 29| approval, pseudocode and smaller components | Complete
|June 30| main compoments | Complete
|July 1 | main components, API | Complete
|July 2 | CSS, Initial Clickable Model | Complete
|June 3 | PostMVP | Complete
|June 6 | Present | Complete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App.js compoment | H | 4hr|  4hr | 4hr |
| Basic CSS Styles | M | 3hrs| 3hrs | 3hrs |
| linking between pages | M | 2hrs | 2hr | 2hr |
| past launches Component | H | 4hrs | 4hrs | 4hrs |
| Rockets component | H | 4hrs | 4hrs | 4hrs |
| about me component | M | 2hrs | 2hrs | 2hrs |
| about spacex component | M | 2hrs | 2hrs | 2hrs |
| footer component | M | 2hrs | 2hrs | 2hrs |
| Total | H | 20hrs| 20hrs | 20hrs |


## SWOT Analysis

#### Strength 

- writing methods/algorithms  for different elements
- api call
- implementing different routes


#### Weakness

- CSS styling

#### Opportunities

- implementing different libraries 
- adding another API to increase functionality

#### Threat

- API may go down or break





## Code Snippet Showcase

**JS**

```
async componentDidMount() {
    const data = await axios('https://api.spacexdata.com/v4/launches/past') 
    const length = data.data.length
    const arrSlice = data.data.slice(length - 7, length -1).reverse()

    this.setState({
      pastLaunches: arrSlice
    })
  }

   <div className="past-launch-info">
        {this.state.pastLaunches.map(launch => 
          <div className="past-launches" key={launch.name}>
            <img className="pastMissImg" src={launch.links.patch.small} alt="patch pic"></img>
            <div className="past-section-info">
              <h3>{launch.name}</h3>
              <span ><strong>Flight Number: </strong>{launch.flight_number}</span>
              <p><strong>Date: </strong>{launch.date_local}</p>
              <p>{launch.details}</p>
              <p>Launch Succesful: {launch.success.toString()}</p>
            </div>
            
            <div className="pastlaunch-buttons">
              <a href={launch.links.webcast} title="Youtube" target="_blank" rel="noopener noreferrer"><button>Watch Launch</button></a>
              <a href={launch.links.reddit.launch} title="Reddit" target="_blank" rel="noopener noreferrer"><button>Discuss Launch</button></a>
            </div>
            
          </div>
          )}
      </div>

```

## Code Issues and Change Log

pivoted to a different API, b/c of defeciencies in original API
