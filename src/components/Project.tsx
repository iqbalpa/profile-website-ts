import { FC, useEffect } from "react";
import Card from "../components/Card";
import Netflix from "../assets/netflix-clone.png";
import FaceDetector from "../assets/face-detector.png";
import ParisHousing from "../assets/paris-housing-price.png";
import NumbersApi from "../assets/numbers-api.png";
import { Fade } from "react-reveal";
import { Link, useLocation } from "react-router-dom";

interface ProjectData {
	projects: Project[];
}

interface Project {
	imageLink: string;
	title: string;
	description: string;
	link: string;
}

const Project: FC = () => {
	const location = useLocation();
	const data: ProjectData = {
		projects: [
			{
				imageLink: Netflix,
				title: "Netflix Website clone",
				description: "Netflix Website interface clone using React JS and Tailwind CSS",
				link: "https://netflix-clone-iqbalpa.vercel.app/",
			},
			{
				imageLink: FaceDetector,
				title: "Face Detector and Finger Counter",
				description: "Face detector and finger counter based on python opencv library",
				link: "https://github.com/iqbalpa/opencv",
			},
			{
				imageLink: ParisHousing,
				title: "Paris Housing Price Prediction",
				description: "Kaggle Competition deployed machine learning model into a website using Streamlit",
				link: "https://iqbalpa-final-project-educare-app-aq96jt.streamlit.app/",
			},
			{
				imageLink: NumbersApi,
				title: "Numbers Random Fact",
				description: "Generate random fact of a number using numbersapi.com",
				link: "https://iqbalpa-numbers-api.netlify.app/",
			},
		],
	};

	useEffect(() => {
		if (location.pathname === "/project") {
			window.scrollTo(0, 0);
		}
	}, [location.pathname]);

	const firstThreeProjects: Project[] = data.projects.slice(0, 3);

	return (
		<>
			{location.pathname === "/project" && (
				<Fade bottom>
					<div className="card-actions justify-start absolute top-0 left-0 ml-10 mt-10">
						<Link to="/">
							<button className="btn btn-primary hover:scale-105">Back</button>
						</Link>
					</div>
				</Fade>
			)}
			<div id="2" className="flex flex-col justify-center items-center bg-MidnightBlue pt-14 pb-5">
				<Fade bottom>
					<h1 className="text-2xl text-green-500 font-bold">P R O J E C T</h1>
					<p className="text-lg">Here are the projects I have worked on lately</p>
					{location.pathname === "/" ? (
						<div className="flex flex-col justify-center items-center">
							<div className="grid grid-cols-3 gap-14 mt-8 mb-5">
								{firstThreeProjects.map((project, index) => (
									<Card
										key={index}
										imageLink={project.imageLink}
										title={project.title}
										description={project.description}
										link={project.link}
									/>
								))}
							</div>
							<Link to="/project">
								<div className="card-actions justify-end">
									<button className="btn btn-success hover:scale-105">See More</button>
								</div>
							</Link>
						</div>
					) : location.pathname === "/project" ? (
						<div className="grid grid-cols-3 gap-14 mt-8 mb-5">
							{data.projects.map((project, index) => (
								<Card
									key={index}
									imageLink={project.imageLink}
									title={project.title}
									description={project.description}
									link={project.link}
								/>
							))}
						</div>
					) : null}
				</Fade>
			</div>
		</>
	);
};

export default Project;
