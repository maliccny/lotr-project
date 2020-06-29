# Project Overview

## lotr-project

insert live host link here

## Project Description

This App showcases the different characters of the Lord Of The Rings and showcases detailed backgrounds of each charater. 

## API and Data Sample

[Lord Of The Rings API](https://the-one-api.herokuapp.com/documentation)

### API Data Sample

```JSON
{
"docs": [
{
"_id": "5cf5805fb53e011a64671582",
"name": "The Fellowship Of The Ring"
},
{
"_id": "5cf58077b53e011a64671583",
"name": "The Two Towers"
},
{
"_id": "5cf58080b53e011a64671584",
"name": "The Return Of The King"
}
],
"pages": {
"current": 1,
"prev": 0,
"hasPrev": false,
"next": 2,
"hasNext": false,
"total": null
},
"items": {
"begin": null,
"end": null,
"total": 3
}
}

```

### Wireframes



![Desktop Landing](https://wireframe.cc/kCjK3y)

- Desktop Landing

![Desktop character page](https://wireframe.cc/j8dluC)

- Desktop character page

![Mobile Landing](https://wireframe.cc/68BV8I)

- Mobile Landing

![Mobile character page](https://wireframe.cc/IyJeqT)

- Mobile character page

![Tablet Landing](https://wireframe.cc/jXHQng)

- Tablet Landing

![Tablet character view](https://wireframe.cc/wSN8nO)

- Mobile character page


#### MVP 

- compont for the home page view with characters 
- component for header
- component for footer
- component for detailed information of each character
- an about the creator component
- additional information component 
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
|__ assets/
      |__ fonts
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Character.jsx
      |__ CharactersList.jsx
      |__ aboutCreator.jsx
      |__ additionalInfo.jsx
      |__ Footer.jsx
```

#### MVP Breakdown

|  Component     |    Type    | state | props | hooks | Description                                  |
| :----------:   | :--------: | :---: | :---: | :---: | :-----------------------------------------   |
|    App.js      |   class    |   y   |   n   |   n   | main component where API call will be        |
|    Header      | functional |   n   |   n   |   n   | Header which will be displayed on all pages. |
| CharacterList  | functional |   n   |   n   |   n   | listing of all the characters to choose from |
|   Character    | functional |   n   |   n   |   n   | detailed information about the character     |
| aboutCreator   | functional |   n   |   n   |   n   | an about me page with contact information    |
| additionalInfo | functional |   n   |   n   |   n   | additional information with external links   |
|    Footer      | functional |   n   |   n   |   n   | Footer which will be displayed on all pages. |



#### PostMVP 

- implement a second API for theme song 
- add gifs of characters with another API



## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 29| approval, pseudocode and smaller components | Icomplete
|June 30| main compoments | Incomplete
|July 1 | main components, API | Incomplete
|July 2 | CSS, Initial Clickable Model | Incomplete
|June 3 | PostMVP | Incomplete
|June 6 | Present | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App.js compoment | H | 4hr|  hr | hr |
| Basic CSS Styles | M | 3hrs| hrs | hrs |
| linking between pages | M | 2hrs | hr | hr |
| CharacterList Component | H | 4hrs | hrs | hrs |
| Character info component | H | 4hrs | hrs | hrs |
| about me component | M | 2hrs | hrs | hrs |
| header component | M | 2hrs | hrs | hrs |
| footer component | M | 2hrs | hrs | hrs |
| Total | H | 20hrs| hrs | hrs |


## SWOT Analysis

#### Strength 

- writing methods/algorithms  for different elements
- api call
- implementing different routes


#### Weakness

- passing some props might be tricky
- CSS styling

#### Opportunities

- implementing different libraries 
- adding another API to increase functionality

#### Threat

- API may go down or break
- API is tricky as some endpoints require auth via a token passed in a header





## Code Snippet Showcase

**JS**

```
fill in later

```

## Code Issues and Change Log

fill in later 
