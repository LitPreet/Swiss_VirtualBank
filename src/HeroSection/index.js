import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  
} from "./HeroElement";
import { Button } from "../components/ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg
            autoPlay
            loop
            muted
            src={new URL("../videos/video.mp4", import.meta.url)}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Digital Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and recieve $250 in credit towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
              primary={true}
              dark={true}
              
            >
             Get started 
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
