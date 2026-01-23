# 🌦️ Weather App (React + Vite)

A simple Weather App built with **React and Vite** that fetches real-time weather data using the **OpenWeatherMap API**.

This project teaches how to work with **real APIs, environment variables, and async data fetching** in React.

---

### Why This Project

This project is build to help you learn:

- how to fetch real data from an API
- how to use environment cariables in Vite
- how to handle loading & errors
- how to work with await/async in React
- how real-world React apps work

### API Used

OpenWeatherMap - Current Weather API

website:

https://openweathermap.org/api

This API provides:

- temperature
- weather condition
- humidity
- wind speed
- city-based search

## How to Get Your API key

### Go to OpenWeatherMap

      https://openweathermap.org/api
### Create a free account

- Click Sign Up
- Verify email
- Login
  
### Generate API key

- Go to Profile -> My API keys
- Copy your API key
- go to your gmail and activate your account good to go

### Create .env file 

In the root of your project, create a file:

    .env

  inside

    VITE_WEATHER_API_KEY=your_api_key_here

### Rules

- file name must be .env
- np quotes
- no spaces
- use =
- fie must be in root
- restart Vite after changes


### Restart dev server

    npm run dev

Vite only loads env variables on restart.

### Important Security Rule 

- Never upload your .env file to GitHub
- Add this to .gitignore

If you accidentally expose a key:
- delete it immediately
- generate a new one


## Project Structure

    03-weather-app/
    ├── .env
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   └── App.css
    ├── screenshot.png
    └── README.md

## Concepts Learned 

- useEffect
- async/await
- API requests
- enviroment variables
- error handling
- loading states
- conditional rendering
- Vite env system


## Run Project 

    npm run dev


### Author 

Ujjwal kumar

Learning React by building real-world projects.

# Final Note 

APIs feel hard at first - then they become your superpower. 
