import React from "react";
import {
  Container,
  FooterWrap,
  FooterMap,
  MapImg,
  FooterInfo,
  FooterMsg,
  FooterLine,
  FooterLeft,
  FooterRight,
} from "./styles";
import GMap from "../../assets/Map.png";

const Page3 = () => {
  return (
    <Container id="location">
      <FooterWrap>
        <FooterMap>
          <MapImg src={GMap} alt="map"></MapImg>
        </FooterMap>
        <FooterInfo>
          <FooterLine>
            <FooterLeft>
              <FooterMsg>
                735 12 Ave SW Calgary AB
                <br />
                T2R 1J7
              </FooterMsg>
            </FooterLeft>
            <FooterRight>
              <FooterMsg>
                asadalcalgary@gmail.com
                <br />
                587-351-9898
                <br />
                Open 11am - 9pm
                <br />
                Closed every Wednesday
              </FooterMsg>
            </FooterRight>
          </FooterLine>
        </FooterInfo>
      </FooterWrap>
    </Container>
  );
};

export default Page3;
