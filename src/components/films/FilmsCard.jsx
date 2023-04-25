import { Link } from 'react-router-dom';

export function Card(props) {
	const {
		id,
		title,
		director,
		date,
		producer,
		handleClickLike,
		handleClickLearnMore,
		category,
	} = props;

	return (
		<div className='card'>
			<img
				src={
					'https://starwars-visualguide.com/assets/img/films/' +
					(id + 1) +
					'.jpg'
				}
				className='card-img-top'
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title mb-3'>{title}</h5>
				<p className='card-text m-0'>Director: {director}</p>
				<p className='card-text m-0'>Producer: {producer}</p>
				<p className='card-text m-0 '>Date: {date}</p>
				<div className='mt-4'>
					<Link
						to={category + '/' + (id + 1)}
						className='btn btn-primary'
						onClick={(event) => handleClickLearnMore(id)}>
						Learn More!
					</Link>
					<button
						className='like btn btn-outline-danger'
						onClick={(event) => handleClickLike(title, id, category)}>
						❤️
					</button>
				</div>
			</div>
		</div>
	);
}
