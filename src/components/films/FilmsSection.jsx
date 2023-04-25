import { Card } from './FilmsCard'

export function FilmsSection(props) {
	const films = props.data

	return (
		<div className='row'>
			<div className='col'></div>
			<div className='col-10 p-5'>
				<div className='fs-3 mb-3'>Films</div>
				<div className='overflow-x-scroll d-flex gap-4'>
					{films?.results?.map((film, index) => (
						<Card
							id={index}
							key={index}
							title={film.title}
							director={film.director}
							producer={film.producer}
							date={film.release_date}
							handleClickLike={props.handleClickLike}
							handleClickLearnMore={props.handleClickLearnMore}
							category={props.category}
						/>
					))}
				</div>
			</div>
			<div className='col'></div>
		</div>
	)
}
