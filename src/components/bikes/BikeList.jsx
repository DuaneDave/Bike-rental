import Bike from "./Bike";
import Spiner from "../spiner/Spiner";
import { useGetBikesQuery } from "../api/apiSlice";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classnames from "classnames";
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

  const containerClassName = classnames("container", { disabled: isFetching });

  return (
    <Swiper
      modules={Navigation}
      navigation
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {isLoading && <Spiner />}
      {isSuccess &&
        Bikes.map((bike) => (
          <SwiperSlide className={containerClassName} key={bike.id}>
            <Bike bike={bike} />
          </SwiperSlide>
        ))}
      {isError && error.toString()}
    </Swiper>
  );
};

export default BikeList;
