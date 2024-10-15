import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { supabase } from "../../utils/supabase";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./List.scss";

function List() {
  const [setSwiperRef] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [moviesResponse, popularShowsResponse, popularMoviesResponse] =
          await Promise.all([
            supabase.from("movies").select(),
            supabase.from("popular-shows").select(),
            supabase.from("popular-movies").select(),
          ]);

        setMovies(moviesResponse.data);
        setPopularShows(popularShowsResponse.data);
        setPopularMovies(popularMoviesResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <main>
        <div>
          <h1>Watch the best classic movies</h1>
          <p>
            Step into the golden age of cinema with our collection of timeless
            classics.
          </p>
        </div>
        {movies.length > 0 && (
          <div className="movies">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
              }}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              hashNavigation={{
                watchState: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              slidesPerView={1}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
                1560: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={setSwiperRef}
              centeredSlides={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySuperSwiper"
            >
              {movies?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="superfab"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span>{item.title}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </main>
      <div className="list">
        <div className="listTitle">Popular Now</div>
        {popularMovies.length > 0 && (
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 8,
              },
              1200: {
                slidesPerView: 9,
              },
              1560: {
                slidesPerView: 10,
              },
            }}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper"
          >
            {popularMovies?.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="list_item"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span>{item.title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="list">
        <div className="listTitle">Popular Shows</div>
        {popularShows.length > 0 && (
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 8,
              },
              1200: {
                slidesPerView: 9,
              },
              1560: {
                slidesPerView: 10,
              },
            }}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper"
          >
            {popularShows?.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="list_item"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span>{item.title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}

export default List;
