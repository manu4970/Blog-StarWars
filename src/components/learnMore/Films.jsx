import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function LearnMoreFilms(props) {
  const [FilmsData, setFilmsData] = useState([]);
  const { route } = useParams();

  console.log(route)

  async function getFilmsData() {
    const response = await fetch("https://swapi.dev/api/films/" + route);
    if (response.ok) {
      const data = await response.json();
      setFilmsData(data);
    } else {
      console.log("Error al obtener Films detail data");
    }
  }

  useEffect(() => {
    getFilmsData();
  }, [route]);

  const film = FilmsData;

  return (
    <div className="container">
      <div className="contDetails d-flex mt-6 mb-5">
        <div className="charImg">
            <img src={"https://starwars-visualguide.com/assets/img/films/"+(route)+".jpg"} className="cardImg card-img-top me-5" alt="..."/>
        </div>
        <div>
          <h1 className="mb-3">{film.title}</h1>
          <p className="object-fit-contain" >
            Lorem ipsum dolor sit amet consectetur adipiscing elit, libero quam
            neque eget mi pharetra ultricies, augue sed scelerisque sem enim
            tortor. Cursus faucibus eleifend tristique tellus fames enim augue
            primis hac velit eros, maecenas suspendisse fermentum ligula netus
            volutpat purus orci consequat interdum lacus, nam risus potenti
            dictum est nostra malesuada bibendum turpis nunc. Fusce etiam dis
            cubilia nam molestie, mattis urna id nostra, vel semper sociosqu
            curae. Commodo etiam sodales cras mauris blandit mattis erat aenean,
            laoreet senectus habitant placerat lectus eget nisl, aptent
            consequat augue risus ad gravida luctus. Donec dui integer aliquam
            porta class tincidunt, auctor odio hac malesuada egestas. Malesuada
            bibendum pretium cursus tempor primis dictum dignissim nostra, risus
            lacinia senectus morbi tellus venenatis mattis tristique, euismod
            lectus varius phasellus netus erat imperdiet.
          </p>
        </div>
      </div>
      <div className="charDetails d-flex gap-5 text-center justify-content-center">
        <p>Director<br/>{film.director}</p>
        <p>Producer Period<br/>{film.producer}</p>
        <p>Release Date<br/>{film.release_date}</p>
        <p>Episode ID<br/>{film.episode_id}</p>
      </div>
    </div>
  );
}