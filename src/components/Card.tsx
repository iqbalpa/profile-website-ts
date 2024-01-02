import { FC } from "react";

interface CardProps {
	imageLink: string;
	title: string;
	description: string;
	link: string;
}

const Card: FC<CardProps> = ({ imageLink, title, description, link }) => {
	return (
		<>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={imageLink} alt="Numbers API" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>{description}</p>
					<div className="card-actions justify-end">
						<a href={link} target="_blank" rel="noreferrer">
							<button className="btn btn-success hover:scale-105">check it out</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
