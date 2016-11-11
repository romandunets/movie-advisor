import React from 'react';
import { Link } from 'react-router';

const MovieListItem = ({movie}) => (
	<div className="movie-item">
		<div className="row">
			<div className="thumbnail col-md-2">
				<img src={movie.image} className="img-fluid img-rounded" />		
			</div>
			<div className="col-md-10">
				<div className="row">
					<div className="col-md-6">
						<h4>
							{movie.title}
							 <small className="text-muted">({movie.year})</small>
						</h4>
					</div>
					<div className="col-md-6">
									<div className="rating text-md-right">
										<span>★</span>
										<span>★</span>
										<span>★</span>
										<span>★</span>
										<span>☆</span>
										<small>7.9 / 10</small>
									</div>
								</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						{movie.age_restriction} |	{movie.duration} min | Action, Adventure, Sci-Fi
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 plot">
						<p>{movie.description}</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="text-md-right">
					<Link to={"/movies/" + movie.id} role="button" className="btn btn-secondary">Details</Link>
					<Link to={"/movies/" + movie.id + "/watched"}  role="button" className="btn btn-secondary">Watched</Link>
				</div>
			</div>
		</div>
	</div>
)

export default MovieListItem
