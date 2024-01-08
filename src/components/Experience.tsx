import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface ExperienceItemProps {
	institution: string;
	role: string;
	date: string;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ institution, role, date }) => {
	return (
		<div className="flex flex-col items-center">
			<div className="w-[50rem] flex flex-row">
				<div className="flex items-center justify-end w-full mx-auto">
					<div className="w-full lg:pr-8">
						<div className="w-full text-xl text-right">
							<h1 className="font-bold">{institution}</h1>
							<h2 className="text-lg">{date}</h2>
						</div>
					</div>
				</div>
				<div className="flex items-start justify-start w-full mx-auto">
					<div className="w-full lg:pl-8 text-left">
						<p className="text-xl">{role}</p>
					</div>
				</div>
			</div>
			<div className="absolute flex items-center justify-center w-4 h-4 transform -translate-x-1/2 -translate-y-4 bg-green-500 border-2 border-green-500 rounded-full left-1/2 sm:translate-y-0"></div>
		</div>
	);
};

const Experience: FC = () => {
	return (
		<>
			<div className="bg-ResolutionBlue text-white flex flex-col justify-center py-6 lg:py-14">
				<Fade>
					<h1 className="text-center text-green-500 text-2xl font-bold">E X P E R I E N C E</h1>
					<p className="text-center text-lg mb-5 text-slate-300">These are some of my experiences in tech</p>
					<div className="w-full mx-auto lg:max-w-4xl">
						<div className="relative">
							<div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
							<div className="space-y-12 lg:space-y-8">
								<ExperienceItem
									institution="Japan Advanced Institute of Science and Technology (JAIST)"
									role="Research Intern for speech translation"
									date="November 2023 - Present"
								/>
								<ExperienceItem
									institution="Faculty of Computer Science UI"
									role="Teaching Assistant for Introduction to AI & Data Science"
									date="August 2023 - Present"
								/>
								<ExperienceItem
									institution="RISTEK Fasilkom UI"
									role="Member of Data Science & Analytics"
									date="March 2023 - Present"
								/>
								<ExperienceItem
									institution="Rumbel BEM UI"
									role="Staff of Software Engineering"
									date="February 2023 - Present"
								/>
								<ExperienceItem
									institution="Faculty of Computer Science UI"
									role="Teaching Assistant for Programming Foundations 1"
									date="January 2023 - June 2023"
								/>
								<ExperienceItem
									institution="Faculty of Computer Science UI"
									role="Teaching Assistant for Calculus 1"
									date="August 2022 - January 2023"
								/>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</>
	);
};

export default Experience;
