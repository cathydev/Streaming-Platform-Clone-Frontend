import { useState } from "react";
import { popularMovies } from "../../utils/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./List.scss";

function List() {
	const [setSwiperRef] = useState(null);

	return (
		<div className="list">
			<div className="listTitle">Popular movies</div>
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={10}
				centeredSlides={true}
				spaceBetween={30}
				navigation={true}
				modules={[Pagination, Navigation]}
				loop={true}
				className="mySwiper"
			>
				{popularMovies.map((item, index) => (
					<SwiperSlide>
						<div className="list_item"></div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default List;
