import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import HSliderLoading from "./HSliderLoading";

export default function HomeSlider() {
  const [sliders, setSliders] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetchData("sliders?populate=*");
      setSliders(response.data);
    })();
  }, []);

  if (!sliders) return <HSliderLoading />;

  const items = sliders?.map((slider) => (
    <SwiperSlide key={slider.id}>
      <img
        src={import.meta.env.VITE_FILE_URL + slider.image.url}
        alt={slider.title}
        style={{ objectFit: "cover" }}
      />
      <p>{slider.title}</p>
    </SwiperSlide>
  ));

  return (
    <Box
      sx={{
        height: "75vh",
        width: "95%",
        margin: "32px auto",
        marginBottom: "48px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSlider"
        style={{
          "--swiper-navigation-size": "12px",
        }}
      >
        {items}
      </Swiper>
    </Box>
  );
}
