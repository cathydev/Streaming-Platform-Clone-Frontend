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
  const [popularMovies, setPopularMovies] = useState([]);
  const [indexNumber, setIndexNumber] = useState();

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.realIndex;
    setIndexNumber(activeSlide);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [popularMoviesResponse] = await Promise.all([
          supabase.from("popular-movies").select(),
        ]);
        setPopularMovies(popularMoviesResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof indexNumber === "number" && popularMovies.length > 0) {
      onChange({
        image: popularMovies[indexNumber - 1].image,
        index: indexNumber - 1,
      });
    }
  }, [popularMovies, indexNumber]);

  return (
    <div className="container2">
      <div className="list2">
        {popularMovies.length > 0 && (
          <Swiper
            onSwiper={setSwiperRef}
            centeredSlides={false}
            slidesPerView={1}
            grabCursor={true}
            freeMode={false}
            loop={true}
            mousewheel={false}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="superfab"
            initialSlide={1}
            onSlideChange={handleSlideChange}
          >
            {popularMovies?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="superfab">
                  <img src={item.image} />
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
