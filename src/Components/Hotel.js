import React from "react";
import RatingStar from "./RatingStar";

const Hotel = ({ name, description, image, defaultRating }) => {
	const [rating, setRating] = React.useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='hotel'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='content'>
				<div className='ht-name'>{name}</div>
				<p>{description}</p>
				<RatingStar selected={rating} />
			</div>
		</div>
	);
};

export default Hotel;
