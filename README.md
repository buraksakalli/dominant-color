# Dominant Color
<p>Dominant Color API is simple way to find dominant color in your images.</p>

![dominantjs](https://user-images.githubusercontent.com/10114716/74526970-a34fd300-4f35-11ea-8757-9721377ff852.png)


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![Build Status](https://travis-ci.com/buraksakalli/dominant-color.svg?branch=master)](https://travis-ci.com/buraksakalli/dominant-color)
[![DeepScan grade](https://deepscan.io/api/teams/7308/projects/9555/branches/125970/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=7308&pid=9555&bid=125970)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
<a href="https://codeclimate.com/github/buraksakalli/cankaya-foodlist/maintainability"><img src="https://api.codeclimate.com/v1/badges/93a28b0b337e413b2d01/maintainability" /></a>

## Installation

```bash
npm install
or
yarn install
```

## Usage

```bash
nodemon
or
node app.js
```
___
## API
### POST
`/dominant`

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `image` | required | file  | Image which you want to find the dominant color.

#### Response

```json
{
  "r":78,
  "g":116,
  "b":116,
  "rgb":"rgb(78,116,116)",
  "hex":"#4e7474"
}
```

___

## Demo
<a href="https://dominantcolor.herokuapp.com/">Demo</a>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.