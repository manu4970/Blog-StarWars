import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function LearnMorePlanets(props) {
	const [planetsData, setPlanetsData] = useState([])
	const { route } = useParams()

	async function getPlanetsData() {
		const response = await fetch('https://swapi.dev/api/planets/' + route)
		if (response.ok) {
			const data = await response.json()
			setPlanetsData(data)
		} else {
			console.log('Error al obtener Planets detail data')
		}
	}

	useEffect(() => {
		getPlanetsData()
	}, [route])

	const planet = planetsData

	return (
		<div className='container'>
			<div className='contDetails d-flex mt-6 mb-5'>
				<div className='charImg'>
					{(() => {
						if (planet.name === 'Tatooine') {
							return (
								<img
									src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg'
									className='tatooine cardImg card-img-top me-5'
									alt='...'
								/>
							)
						} else {
							return (
								<img
									src={'https://starwars-visualguide.com/assets/img/planets/' + route + '.jpg'}
									className='cardImgPlanet  card-img-top me-5'
									alt='...'
								/>
							)
						}
					})()}
				</div>
				<div>
					<h1 className='mb-3'>{planet.name}</h1>
					<p className='object-fit-contain'>
						Lorem ipsum dolor sit amet consectetur adipiscing elit, libero quam neque eget mi
						pharetra ultricies, augue sed scelerisque sem enim tortor. Cursus faucibus eleifend
						tristique tellus fames enim augue primis hac velit eros, maecenas suspendisse fermentum
						ligula netus volutpat purus orci consequat interdum lacus, nam risus potenti dictum est
						nostra malesuada bibendum turpis nunc. Fusce etiam dis cubilia nam molestie, mattis urna
						id nostra, vel semper sociosqu curae. Commodo etiam sodales cras mauris blandit mattis
						erat aenean, laoreet senectus habitant placerat lectus eget nisl, aptent consequat augue
						risus ad gravida luctus. Donec dui integer aliquam porta class tincidunt, auctor odio
						hac malesuada egestas. Malesuada bibendum pretium cursus tempor primis dictum dignissim
						nostra, risus lacinia senectus morbi tellus venenatis mattis tristique, euismod lectus
						varius phasellus netus erat imperdiet.
					</p>
				</div>
			</div>
			<div className='charDetails d-flex gap-5 text-center justify-content-center'>
				<p>
					Rotation Period
					<br />
					{planet.rotation_period}
				</p>
				<p>
					Orbital Period
					<br />
					{planet.orbital_period}
				</p>
				<p>
					Diameter
					<br />
					{planet.diameter}
				</p>
				<p>
					Climate
					<br />
					{planet.climate}
				</p>
				<p>
					Gravity
					<br />
					{planet.gravity}
				</p>
				<p>
					Terrain
					<br />
					{planet.terrain}
				</p>
				<p>
					Population
					<br />
					{planet.population}
				</p>
			</div>
		</div>
	)
}
