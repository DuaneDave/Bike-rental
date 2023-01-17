import Bike from "./Bike";
import Spiner from "../../reusables/spiner/Spinner";
import { useGetBikesQuery } from "../api/apiSlice";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./BikeList.module.css";
import "swiper/css/navigation";
// import "./style.css";
import Button from "../../reusables/button/Button";

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
      modules={[Navigation]}
      navigation={true}
      // navigation={{
      //   prevEl: "swiper-button-prev",
      //   nextEl: "swiper-button-next",
      //   disabledClass: "swiper-button-disabled"
      // }}
      spaceBetween={50}
      slidesPerView={3}
      className="swiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <Button className="swiper-button-prev" />
      <Button className="swiper-button-next" /> */}
      {isLoading && <Spiner />}
      {isSuccess &&
        Bikes.map((bike) => (
          <SwiperSlide className={containerClassName} key={bike.id}>
            <img
              style={{
                width: "50px",
                cursor: "pointer",
              }}
              className="img"
              onClick={() => navigate(`/Bikes/${bike.id}`)}
              src={bike.images[Object.keys(bike.images)[0]]}
            ></img>
            <h3>
              {bike.name} {bike.brand}
            </h3>
            <p>
              {" "}
              {bike.description.substring(1, 100)}
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
