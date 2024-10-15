import { useState } from "react";
import { InfoOutlined, PlayArrow, Add } from "@mui/icons-material";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Slider from "../Slider/Slider";
import "./Featured.scss";

function Featured() {
  const [currentMovie, setCurrentMovie] = useState("");
  const [currentIndex, setIndex] = useState("");

  const handleImageAndIndexChange = ({ image, title, description, index, awards }) => {
    setCurrentMovie({
      image: image,
      title: title,
      description: description,
	  awards: awards
    });
    setIndex(index);
  };
  return (
    <>
      <div className="myContainer">
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={currentIndex} timeout={300} classNames="fade">
            <img className="featured" src={currentMovie.image} />
          </CSSTransition>
        </SwitchTransition>
        <div className="info">
          <span className="title">{currentMovie.title}</span>
          <span className="desc">{currentMovie.description}</span>
          <span className="show_info">
            <InfoOutlined fontSize="small" />
            This marvelous show was nominated for {currentMovie.awards} Emmys
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            {/*             <button className="more">
              <Add />
              <span>Add List</span>
            </button> */}
          </div>
        </div>
        <Slider onChange={handleImageAndIndexChange} />
      </div>
    </>
  );
}

export default Featured;
