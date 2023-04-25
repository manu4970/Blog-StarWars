import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function LearnMorePeople(props) {
	const [peopleData, setPeopleData] = useState([])
	const { route } = useParams()

	async function getPeopleData() {
		const response = await fetch('https://swapi.dev/api/people/' + route)
		if (response.ok) {
			const data = await response.json()
			setPeopleData(data)
		} else {
			console.log('Error al obtener people detail data')
		}
	}

	useEffect(() => {
		getPeopleData()
	}, [route])

	const char = peopleData

	return (
		<div className='container'>
			<div className='contDetails d-flex mt-6 mb-5'>
				<div className='charImg'>
					<img
						src={'https://starwars-visualguide.com/assets/img/characters/' + route + '.jpg'}
						className='cardImg card-img-top me-5'
						alt='...'
					/>
				</div>
				<div>
					<h1 className='mb-3'>{char.name}</h1>
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
					Birth Year
					<br />
					{char.birth_year}
				</p>
				<p>
					Eye Color
					<br />
					{char.eye_color}
				</p>
				<p>
					Gender
					<br />
					{char.gender}
				</p>
				<p>
					Hair Color
					<br />
					{char.hair_color}
				</p>
				<p>
					Height
					<br />
					{char.height}
				</p>
				<p>
					Mass
					<br />
					{char.mass}
				</p>
				<p>
					Skin Color
					<br />
					{char.skin_color}
				</p>
			</div>
		</div>
	)
}
