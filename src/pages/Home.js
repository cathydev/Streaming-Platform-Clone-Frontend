import "./Home.scss";
import Navbar from "../Components/Navbar/Navbar";
import Featured from "../Components/Featured/Featured";
import List from "../Components/List/List";

function Home() {
	return (
		<div className="home">
			<Navbar />
			<Featured />
			<List />
			<List />
			<List />
			<List />
			<List />
		</div>
	);
}

export default Home;
