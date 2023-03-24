import React from "react";
import { Button } from "../components/ButtonElement";
import {
  Column2,
  Column1,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img,
} from "./InfoElement";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    dark={dark}
                    primary= {primary}
                    to="home"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
