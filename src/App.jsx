import './styles/App.css'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { PeopleSection } from './components/people/PeopleSection'
import { FilmsSection } from "./components/films/FilmsSection"
import { PlanetsSection } from "./components/planets/PlanetsSection"
import { LearnMorePeople } from './components/learnMore/People'
import { LearnMorePlanets } from './components/learnMore/Planets'
import { Route, Routes } from 'react-router-dom'
import { LearnMoreFilms } from './components/learnMore/Films'


function App() {
  const [peopleData, setPeopleData] = useState([])
  const [filmsData, setFilmsData] = useState([])
  const [planetsData, setPlanetsData] = useState([])
  const [favList,setFavList]= useState([])
  const [route,setRoute] = useState("/")
  const [liked, setLiked] = useState(false)

  const peopleUrl = "https://swapi.dev/api/people/"
  const filmsUrl = "https://swapi.dev/api/films/"
  const planetsUrl = "https://swapi.dev/api/planets/"
  
  
  async function getPeopleData () {
    const response = await fetch(peopleUrl)
    if (response.ok){
      const data = await response.json()
      setPeopleData(data)
    } else {
      console.log("Error al obtener people data")
    }
  }

  async function getFilmsData(){
    const response = await fetch(filmsUrl)
    if(response.ok){
      const data = await response.json()
      setFilmsData(data)
    } else {
      console.log("Error al obtener films data")
    }
  }

  async function getPlanetsData(){
    const response = await fetch(planetsUrl)
    if(response.ok){
      const data = await response.json()
      setPlanetsData(data)
    } else {
      console.log("Error al obtener planets data")
    }
  }


  useEffect(()=>{
    getPeopleData()
    getFilmsData()
    getPlanetsData()
  },[])
  
 function handleClickLike(name,id,category){
  const newList = [name]
  const listPlusId = [{
    nombre: name,
    idu: id,
    categoria:category,
    liked:false
  }]
  //  setFavList((prevfavList)=>[...prevfavList,newList])
  setFavList((prevfavList)=>prevfavList.concat(listPlusId))
  if(liked=== false){
    setLiked(true)
  } else {
    setLiked(false)
  }
 }

 async function deleteElement(list,index) {
  const newList = favList.filter((list, currentIndex) => index != currentIndex)
  setFavList(newList)
  setRoute()

  }

  function handleClickLearnMore(ev){
    setRoute(ev)
  }


  return (
    <>
      <Navbar  favList={favList} deleteElement={deleteElement} />
      <Routes>
          <Route path="/" element={
            <div className='container-fluid'>
              <PeopleSection data={peopleData} liked={liked} category="character" handleClickLearnMore={handleClickLearnMore} handleClickLike={handleClickLike}/>
              <FilmsSection data={filmsData} category="film" handleClickLearnMore={handleClickLearnMore} handleClickLike={handleClickLike}/>
              <PlanetsSection data={planetsData} category="planet" handleClickLearnMore={handleClickLearnMore} handleClickLike={handleClickLike}/>
            </div>
          }
          />
          <Route 
          path="/character/:route"
          element={
            <LearnMorePeople routeId={route}/>
          }
          />
          <Route 
          path="/planet/:route"
          element={
            <LearnMorePlanets routeId={route}/>
          }
          />
          <Route 
          path="/film/:route"
          element={
            <LearnMoreFilms routeId={route}/>
          }
          />
      </Routes>
    </>
  )
}



export default App
