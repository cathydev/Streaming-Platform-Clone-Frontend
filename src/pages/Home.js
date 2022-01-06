import "./Home.scss";
import Navbar from "../Components/Navbar";
import Featured from "../Components/Featured";
import List from "../Components/List";

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
