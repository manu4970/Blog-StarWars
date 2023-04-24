import './styles/App.css'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { PeopleSection } from './components/people/PeopleSection'
import { FilmsSection } from "./components/films/FilmsSection"
import { PlanetsSection } from "./components/planets/PlanetsSection"
import { LearnMore } from './components/learnMore/People'
import { Route, Routes, Link , useParams} from 'react-router-dom'


function App() {
  const [peopleData, setPeopleData] = useState([])
  const [filmsData, setFilmsData] = useState([])
  const [planetsData, setPlanetsData] = useState([])
  const [favList,setFavList]= useState(["(none)"])
  const [route,setRoute] = useState("/")

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
  
 function handleClickLike(name,id){
  const newList = [name]
  setRoute(id)
  //  setFavList((prevfavList)=>[...prevfavList,newList])
  setFavList((prevfavList)=>prevfavList.concat(newList))
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
              <PeopleSection data={peopleData} category="Characters" handleClickLearnMore={handleClickLearnMore} handleClickLike={handleClickLike}/>
              <FilmsSection data={filmsData} category="Films" handleClickLearnMore={handleClickLearnMore} handleClickLike={handleClickLike}/>
              <PlanetsSection data={planetsData} category="Planets" handleClickLearnMore={handleClickLearnMore} handleClickLike={handleClickLike}/>
            </div>
          }
          />
          <Route 
          path="/character/:route"
          element={
            <LearnMore/>
          }
          />
      </Routes>
    </>
  )
}



export default App
