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
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vitae adipisci repellendus eum quasi illo, velit numquam,
					maxime tempora sint deleniti, aliquid qui.
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
