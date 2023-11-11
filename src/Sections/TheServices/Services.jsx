import React, { useEffect, useState } from "react";
import { MainTitle } from "../../Components/importComponents";
import TheServices from "./TheServices";
import ServiceSlider from "./ServiceSlider";

const Services = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MainTitle title=" الخدمات" />
      {isLargeScreen ? <TheServices /> : <ServiceSlider />}
    </>
  );
};

export default Services;
