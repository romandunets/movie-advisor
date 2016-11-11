import React from 'react';
import { Link } from 'react-router';

const MovieDetail = ({movie, deleteMovie}) => (
	<div>
		<div className="row">
			<div className="thumbnail col-md-3">
				<img src={movie.image} className="img-fluid img-rounded" />		
			</div>
			<div className="col-md-9">
				<div className="row">
					<div className="col-md-6">
						<h4>
							{movie.title}
							<small className="text-muted"> ({movie.year})</small>
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
						{movie.age_restriction} | {movie.duration} min | Action, Adventure, Sci-Fi
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 plot">
						<p>{movie.description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 people">
						<div>Director: {movie.producer}</div>
						<div>Actors: Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow</div>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="text-md-right">
					<Link to='#' role="button" className="btn btn-secondary" onClick={() => deleteMovie(movie.id)}>Delete</Link>
					<Link to={"/movies/" + movie.id + "/edit"}  role="button" className="btn btn-secondary">Edit</Link> 
					<Link to={"/movies/" + movie.id + "/watched"}  role="button" className="btn btn-secondary">Watched</Link>
				</div>
			</div>
		</div>	
	</div>
)

export default MovieDetail
