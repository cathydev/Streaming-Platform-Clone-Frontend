import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ListItem from "./ListItem";
import "./List.scss";

function List() {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);

	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === "right" && slideNumber < 5) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance
				}px)`;
		}
	};
	return (
		<div className="list">
			<Carousel>
				<ListItem index={0} />
				<ListItem index={1} />
				<ListItem index={2} />
				<ListItem index={3} />
			</Carousel>
			 <span className="listTitle">Trending Now</span>
			<div className="wrapper">
				<ArrowBackIosOutlined
					className="sliderArrow left"
					onClick={() => handleClick("left")}
					style={{ display: !isMoved && "none" }}
				/>
				<div className="container" ref={listRef}>
					<ListItem index={0} />
					<ListItem index={1} />
					<ListItem index={2} />
					<ListItem index={3} />
					<ListItem index={4} />
					<ListItem index={5} />
					<ListItem index={6} />
					<ListItem index={7} />
					<ListItem index={8} />
					<ListItem index={9} />
				</div>
				<ArrowForwardIosOutlined
					className="sliderArrow right"
					onClick={() => handleClick("right")}
				/>
			</div> 
		</div>
	);
}

export default List;
