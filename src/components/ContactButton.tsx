import React from "react";

const ContactButton: React.FC = () => {
	const recipient: string = "iqbalpahlevi@ristek.cs.ui.ac.id";
	const subject: string = "Subject";
	const body: string = "Enter your message here";

	const handleClick = () => {
		const gmailUrl: string = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}&tf=1&source=mailto&shva=1`;
		window.location.href = gmailUrl;
	};

	return (
		<button
			className="hover:scale-105 m-3 p-2 text-lg rounded-lg border-2 border-white duration-300 hover:bg-green-500 hover:border-green-500 text-white hover:text-ResolutionBlue"
			onClick={handleClick}
		>
			Contact Me
		</button>
	);
};

export default ContactButton;
