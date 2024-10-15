import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { supabase } from "../../utils/supabase";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.scss";

export default function Slider({ onChange }) {
  const [setSwiperRef] = useState(null);
  const [shows, setShows] = useState([]);
  const [indexNumber, setIndexNumber] = useState();

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.realIndex;
    setIndexNumber(activeSlide);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [showsResponse] = await Promise.all([
          supabase.from("shows").select(),
        ]);
        setShows(showsResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
   console.log(shows)

  useEffect(() => {
    if (typeof indexNumber === "number" && shows.length > 0) {
      const currentIndex = indexNumber === 0 ? 0 : indexNumber - 1;
      console.log(currentIndex)
      onChange({
        image: shows[indexNumber].image,
        title: shows[indexNumber].title,
        description: shows[indexNumber].description,
        awards: shows[indexNumber].awards,
        index: indexNumber,
      });
    }
  }, [shows, indexNumber]);

  return (
    <div className="featured-container">
      <div className="show-list">
        {shows.length > 0 && (
          <Swiper
            onSwiper={setSwiperRef}
            centeredSlides={false}
            slidesPerView={1}
            grabCursor={true}
            mousewheel={false}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3000}}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              dynamicBullets: false,
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            }}
            className="superfab"
            initialSlide={1}
            onSlideChange={handleSlideChange}
          >
            {shows?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="superfab">
                  <img src={item.image}/>
                  <span>{item.title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
