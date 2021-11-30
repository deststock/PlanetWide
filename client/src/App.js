import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Main from './views/Main'
import Details from './views/Details'
import New from './views/New'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [planets, setPlanets] = useState([])
  const [pic, setPic] = useState([])
  const [marsPics, setMarsPics] = useState([])

  const changeSubmitted = () => {
    setSubmitted(!submitted);
  }
  // navbar
  useEffect(() => {
    axios.get('http://localhost:8000/api/planets')
      .then( res => {
        setPlanets(res.data)
        setLoaded(true)
      })
      .catch(err => console.error(err))
  }, [])

  // photo of the day
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=12ka2at4PMYgfbTF1eRab5nhQmHpeLYNaoY4eCSL")
            .then(res => {
                setPic(res.data)
            })
    }, [])

    //mars box
  //   useEffect(() => {
  //     axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=12ka2at4PMYgfbTF1eRab5nhQmHpeLYNaoY4eCSL")
  //         .then(res => {
  //             console.log(res.data)
  //             setMarsPics([res.data])
  //         })
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loaded && <Main changeSubmitted={changeSubmitted} submitted={submitted} planets = {planets} pic={pic} marsPics={marsPics}/>}
        </Route>
        <Route exact path="/:id">
          <Details changeSubmitted={changeSubmitted} submitted={submitted} planets = {planets}/>
        </Route>
        <Route exact path="/planet/new">
          <New changeSubmitted={changeSubmitted} submitted={submitted}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
