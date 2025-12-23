import React from "react";
import HomeSlider from "./HomeSlider";
import ProductSlider from "./ProductSlider";
import HomeBanner from "./HomeBanner";
import Benefits from "./Benefits";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <ProductSlider />
      <HomeBanner />
      <Benefits/>
    </>
  );
}
