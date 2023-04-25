import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Card(props) {
	const {
		name,
		url,
		hair,
		eye,
		gender,
		id,
		handleClickLike,
		handleClickLearnMore,
		category,
		liked
	} = props

	return (
		<div className='card'>
			<img
				src={'https://starwars-visualguide.com/assets/img/characters/' + (id + 1) + '.jpg'}
				className='card-img-top'
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title mb-3'>{name}</h5>
				<p className='card-text m-0'>Gender: {gender}</p>
				<p className='card-text m-0'>Hair color: {hair}</p>
				<p className='card-text m-0 '>Eye color: {eye}</p>
				<div className='mt-4'>
					<Link
						to={category + '/' + (id + 1)}
						className='btn btn-primary'
						onClick={(event) => handleClickLearnMore(id)}>
						Learn More!
					</Link>
					<button
						className='like btn btn-outline-danger'
						onClick={(event) => handleClickLike(name, id, category, liked)}>
						{liked ? (
							<i className='fa-solid fa-heart'></i>
						) : (
							<i className='fa-regular fa-heart'></i>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
