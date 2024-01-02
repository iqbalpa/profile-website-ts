import { FC } from "react";
import ContactButton from "../components/ContactButton";

const Header: FC = () => {
	return (
		<header className="fixed w-screen h-[4.5rem] z-10 flex flex-row justify-between items-center bg-ResolutionBlue text-white">
			<h1 className="text-2xl font-bold ml-5">IQBAL</h1>

			<div className="flex flex-row items-center mr-8 text-md font-semibold">
				<a href="#1" className="text-xl m-3 duration-75 hover:text-green-500">
					About
				</a>
				<a href="#2" className="text-xl m-3 duration-75 hover:text-green-500">
					Projects
				</a>
				<ContactButton />
			</div>
		</header>
	);
};

export default Header;
