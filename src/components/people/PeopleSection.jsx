import { Card } from './PeopleCard'

export function PeopleSection(props) {
	const people = props.data

	return (
		<div className='row'>
			<div className='col'></div>
			<div className='col-10 p-5'>
				<div className='fs-3 mb-3'>Characters</div>
				<div className='overflow-x-scroll d-flex gap-4'>
					{people?.results?.map((person, index) => (
						<Card
							id={index}
							key={index}
							name={person.name}
							url={person.url}
							hair={person.hair_color}
							eye={person.eye_color}
							gender={person.gender}
							handleClickLike={props.handleClickLike}
							handleClickLearnMore={props.handleClickLearnMore}
							category={props.category}
							liked={props.liked}
						/>
					))}
				</div>
			</div>
			<div className='col'></div>
		</div>
	)
}
