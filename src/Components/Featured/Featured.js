import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.scss";

function Featured({ type }) {
	return (
		<div className="featured">
			{type && (
				<div className="category">
					<span>{type === "movie" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<div className="info">
				<img
					src="/title.png"
					alt=""
				/>
				<span className="desc">
					Welcome to 'Shrimp Game,' a comedic take on a deadly competition
					where contestants face absurd challenges for a chance at a tantalizing prize.
					In this quirky series, participants dive into a world of crustacean-themed games
					that are as hilarious as they are dangerous. Watch as the contestants navigate
					through shrimpy obstacles, facing off in bizarre challenges
					that will have you both laughing and on the edge of your seat
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>More info</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;
