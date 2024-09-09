import { InfoOutlined, PlayArrow, Add} from "@mui/icons-material";
import "./Featured.scss";

function Featured() {
	return (
		<div className="featured">
			<div className="info">
				<img
					src="/title.png"
					alt=""
				/>
				<span className="desc">
					Welcome to 'Shrimp Game' a comedic take on a deadly competition
					where contestants face absurd challenges for a chance at a tantalizing prize.
					In this quirky series, participants dive into a world of crustacean-themed games
					that are as hilarious as they are dangerous. Watch as the contestants navigate
					through shrimpy obstacles, facing off in bizarre challenges.
				</span>
				<span className="show_info">
					<InfoOutlined fontSize="small" />
					This marvelous show was nominated for 0 Emmys
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<Add />
						<span>Add List</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;
