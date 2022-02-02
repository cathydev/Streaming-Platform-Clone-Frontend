import { useState } from "react";
import ReactGA from 'react-ga';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./Navbar.scss";

const Navbar = () => {
	const eventTrack = (category, action, label) => {
		console.log("GA event:", category, ":", action, ":", label);
		ReactGA.event({
		  category: category,
		  action: action,
		  label: label,
		})
	  }

	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<nav className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="main-nav">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						width="95" height="25" alt="Netflix logo"
					/>
					<span className="active">Home</span>
					<span>TV Shows</span>
					<span>Movies</span>
					<span>New & Popular</span>
					<span>My List</span>
				</div>
				<div className="sec-nav">
					<Search className="icon" />
					<Notifications onClick={eventTrack.bind(this, "Notifications clicked")} className="icon" />
					<img
						src="https://i.imgur.com/Uf1Qu73.png"
						alt="Taylor Swift Profile Icon"
					/>
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
