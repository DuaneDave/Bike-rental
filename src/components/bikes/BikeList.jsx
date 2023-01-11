import Bike from "./Bike";
import Spiner from "../../reusables/spiner/Spinner";
import { useGetBikesQuery } from "../api/apiSlice";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const BikeList = () => {
  const {
    data: Bikes,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetBikesQuery();
  const navigate = useNavigate();
  const containerClassName = classnames("container", { disabled: isFetching });

  return (
    <Swiper
      modules={Navigation}
      navigation
      spaceBetween={50}
      slidesPerView={3}
      className="swiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {isLoading && <Spiner />}
      {isSuccess &&
        Bikes.map((bike) => (
          <SwiperSlide className={containerClassName} key={bike.id}>
            <img
              style={{ cursor: "pointer" }}
              className="img"
              onClick={() => navigate(`/Bikes/${bike.id}`)}
              src={bike.images[Object.keys(bike.images)[0]]}
            ></img>
            <h3>{bike.name}</h3>
            <p>
              {" "}
              {bike.description.substring(1, 200)}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/Bikes/${bike.id}`)}
              >
                ...
              </span>
            </p>
          </SwiperSlide>
        ))}
      {isError && error.toString()}
    </Swiper>
  );
};

export default BikeList;
