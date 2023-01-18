<<<<<<< HEAD
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Spiner from "../../reusables/spiner/Spinner";
import { useGetBikesQuery } from "../api/apiSlice";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./BikeList.module.css";
import Button from "../../reusables/button/Button";
import truncateString from "../../helpers/truncateString";
=======
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Spiner from '../../reusables/spiner/Spinner';
import { useGetBikesQuery } from '../api/apiSlice';
import { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames';
import 'swiper/css';

import styles from './Bike.module.css';

import Button from '../../reusables/button/Button';
import Container from '../../reusables/container/Container';
>>>>>>> b6b99967f1e680d663f4fa7a37904bab6793809a

function BikeList() {
  const {
    data: Bikes,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetBikesQuery();
  const navigate = useNavigate();
  const containerClassName = classnames('container', { disabled: isFetching });

  return (
<<<<<<< HEAD
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      spaceBetween={50}
      slidesPerView={3}
      className="swiper"
    >
      <div className="swiper-button image-swiper-button-next">
        <FaArrowCircleRight size="90px" color="green" />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <FaArrowCircleLeft size="5em" color="green" />
      </div>
      {isLoading && <Spiner />}
      {isSuccess &&
        Bikes.map((bike) => (
          <SwiperSlide
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/Bikes/${bike.id}`)}
            className={containerClassName}
            key={bike.id}
          >
            <img src={bike.images[Object.keys(bike.images)[0]]}></img>
            <h3>
              {bike.name} {bike.brand}
            </h3>
            <p> {truncateString(0, 100, bike.description)}</p>
          </SwiperSlide>
        ))}
      {isError && error.toString()}
    </Swiper>
=======
    <div className={styles.sliderContainer + ' flex center'}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        spaceBetween={50}
        slidesPerView={3}
        className={styles.cry}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-button image-swiper-button-next">
          <FaArrowCircleRight color="green" />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <FaArrowCircleLeft color="green" />
        </div>
        {isLoading && <Spiner />}
        {isSuccess &&
          Bikes.map((bike) => (
            <SwiperSlide className={styles.sliderItem} key={bike.id}>
              <img
                onClick={() => navigate(`/Bikes/${bike.id}`)}
                src={bike.images[Object.keys(bike.images)[0]]}
              />
              <h3>
                {bike.name} {bike.brand}
              </h3>
              <p>
                {' '}
                {bike.description.substring(1, 100)}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/Bikes/${bike.id}`)}
                >
                  ...
                </span>
              </p>
            </SwiperSlide>
          ))}
        {isError && error.toString()}
      </Swiper>
    </div>
>>>>>>> b6b99967f1e680d663f4fa7a37904bab6793809a
  );
}

export default BikeList;
