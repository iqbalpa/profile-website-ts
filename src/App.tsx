import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
