import "../App.css";
import { FC } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Home: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Experience />
			<Project />
			<Footer />
		</>
	);
};

export default Home;
