
export function Card (props){
    const {name,url,hair,eye,gender,id,handleClick} = props

    return(
        <div className="card">
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} className="cardImg card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text m-0">Gender: {gender}</p>
                <p className="card-text m-0">Hair color: {hair}</p>
                <p className="card-text m-0 ">eye color: {eye}</p>
                <div className="mt-4">
                    <a href={url} className="btn btn-primary">Learn More!</a>
                    <button 
                    className="like btn btn-outline-danger"
                    onClick={event => handleClick(name)}
                    >❤️</button>
                </div>
            </div>
        </div>
    )
}