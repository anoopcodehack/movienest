import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "./MovieCard";

function MovieSlider({ title, movies, favorites, onFavToggle }) {
  return (
    <div className="movie-slider">
      <h2>{title}</h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              movie={movie}
              favorites={favorites}
              onFavToggle={onFavToggle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieSlider;
