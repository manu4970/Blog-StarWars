import { Card } from "./PlanetsCard";

export function PlanetsSection(props) {
  const planets = props.data;

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col-10 p-5">
        <div className="fs-3 mb-3">{props.category}</div>
        <div className="overflow-x-scroll d-flex gap-4">
          {planets?.results?.map((planet, index) => (
            <Card
              id={index}
              key={index}
              name={planet.name}
              climate={planet.climate}
              population={planet.population}
              terrain={planet.terrain}
              handleClick={props.handleClickLike}
            />
          ))}
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}