import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import RetrieveData from "./utils/query-database";

function App() {
	RetrieveData()
		.then(() => {
			console.log("Data retrieval completed.");
		})
		.catch((error) => {
			console.error("Error retrieving data:", error);
		});

	return (
		<>
			<Header />
			<Hero />
			<Experience />
			<Project />
			<Footer />
		</>
	);
}

export default App;
