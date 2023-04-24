import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function LearnMore(props) {
  const [peopleData, setPeopleData] = useState([]);
  // const param = useParams();
  const routeId = props.routeId + 1;

  async function getPeopleData() {
    const response = await fetch("https://swapi.dev/api/people/" + routeId);
    if (response.ok) {
      const data = await response.json();
      setPeopleData(data);
    } else {
      console.log("Error al obtener people detail data");
    }
  }

  useEffect(() => {
    getPeopleData();
  }, []);

  const char = peopleData;

  return (
    <div className="container">
      <div className="contDetails d-flex mt-6 mb-5">
        <div className="charImg">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              routeId +
              ".jpg"
            }
            className="cardImg card-img-top me-5"
            alt="..."
          />
        </div>
            
          <p className="object-fit-contain" >
          <h1 className="mb-3">{char.name}</h1>
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
      <div className="charDetails d-flex gap-5 text-center justify-content-center">
        
        <h4>Birth Year <br/> <h5>{char.birth_year}</h5></h4>
        <h4>Eye Color<br/> <h5>{char.eye_color}</h5></h4>
        <h4>Gender<br/> <h5>{char.gender}</h5></h4>
        <h4>Hair Color<br/> <h5>{char.hair_color}</h5></h4>
        <h4>Height<br/> <h5>{char.height}</h5></h4>
        <h4>Mass<br/> <h5>{char.mass}</h5></h4>
        <h4>Skin Color<br/> <h5>{char.skin_color}</h5></h4>
      </div>
    </div>
  );
}
