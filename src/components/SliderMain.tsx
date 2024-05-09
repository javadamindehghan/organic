import React from "react";
import Button from "@mui/material/Button";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
interface Props {}

function SliderMain(props: Props) {
  const {} = props;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
      parallax
      speed={1000}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide data-swiper-parallax="50%">
        <div data-swiper-parallax="100%" className="carousel-1">
          <h4>Welcome to our dairy farm</h4>
          <h1>Best Organic Dairy Products</h1>
          <Button
            sx={{
              backgroundColor: "#EDDD5E",
              padding:'20px',
              color: "black",
              "&:hover": {
                backgroundColor: "#EDDD5E",
              },
            }}
            variant="contained"
          >
            Explore more
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide data-swiper-parallax="100%">
        <div className="carousel-2">
          <h4>Welcome to our dairy farm</h4>
          <h1>Best Organic Dairy Products</h1>
          <Button
            sx={{
                padding:'20px',
              backgroundColor: "#EDDD5E",
              color: "black",
              "&:hover": {
                backgroundColor: "#EDDD5E",
              },
            }}
            variant="contained"
          >
            Explore more
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderMain;
