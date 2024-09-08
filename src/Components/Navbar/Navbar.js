import { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./Navbar.scss";

const Navbar = () => {
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
						src="/logo.png"
						width="125" height="225" alt="logo"
					/>
					<div className="nav-list">
						<span className="active">Home</span>
						<span>TV Shows</span>
						<span>Movies</span>
						<span>New & Popular</span>
						<span>My List</span>
					</div>
				</div>
				<div className="sec-nav">
					<Search className="icon" />
					<Notifications className="icon" />
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
