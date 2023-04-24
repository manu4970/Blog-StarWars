import { Link } from 'react-router-dom'

export function Card (props){
    const {name,id,climate,population,terrain, handleClickLike ,handleClickLearnMore, category} = props

    return(
        <div className="card">
                {(()=>{
                    if (props.id===0){
                        return(
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg" className="tatooine cardImg card-img-top" alt="..."/>
                        )
                        
                    }else {
                        return(
                        <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id+1)+".jpg"} className="card-img-top" alt="..."/>
                        )
                    }
                })()}
            <div className="card-body">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text m-0">Climate: {climate}</p>
                <p className="card-text m-0 ">Terrain: {terrain}</p>
                <p className="card-text m-0">Population: {population}</p>
                <div className="mt-4">
                    <Link 
                    to={(category)+"/"+(id+1)}
                    className="btn btn-primary"
                    onClick={event => handleClickLearnMore(id)}
                    >Learn More!</Link>
                    <button 
                    className="like btn btn-outline-danger"
                    onClick={event => handleClickLike(name,id,category)}
                    >❤️</button>
                </div>
            </div>
        </div>
    )
}