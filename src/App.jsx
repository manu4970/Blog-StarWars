import './styles/App.css'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { PeopleSection } from './components/people/PeopleSection'
import { FilmsSection } from "./components/films/FilmsSection"
import { PlanetsSection } from "./components/planets/PlanetsSection"


function App() {
  const [peopleData, setPeopleData] = useState([])
  const [filmsData, setFilmsData] = useState([])
  const [planetsData, setPlanetsData] = useState([])

  const favList= ["grogu","mando"]

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
  
 function handleClick(name){
    favList.push(name)
    console.log(name)
 }

  return (
    <>
      <Navbar favList={favList}/>
      <div className='container-fluid'>
        <PeopleSection data={peopleData} category="Characters" handleClick={handleClick}/>
        <FilmsSection data={filmsData} category="Films" handleClick={handleClick}/>
        <PlanetsSection data={planetsData} category="Planets" handleClick={handleClick}/>
      </div>
    </>
  )
}



export default App
