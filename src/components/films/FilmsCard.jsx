

export function Card (props){
    const {id,title,director,date,producer,handleClick} = props

    return(
        <div className="card">
            <img src={"https://starwars-visualguide.com/assets/img/films/"+(id+1)+".jpg"} className="cardImg card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title mb-3">{title}</h5>
                <p className="card-text m-0">Director: {director}</p>
                <p className="card-text m-0">Producer: {producer}</p>
                <p className="card-text m-0 ">Date: {date}</p>
                <div className="mt-4">
                    <a href="..."className="btn btn-primary">Learn More!</a>
                    <button 
                    className="like btn btn-outline-danger"
                    onClick={event => handleClick(title)}
                    >❤️</button>
                </div>
            </div>
        </div>
    )
}