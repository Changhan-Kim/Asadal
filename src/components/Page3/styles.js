import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 7rem calc((100vw - 1300px) / 2);
  display: flex;
  margin: 0;
  padding: 0;
`;

export const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterMap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapImg = styled.img`
  width: 100%;
  height: 80vh;
  padding-top: 8rem;
  object-fit: cover;
`;

export const FooterInfo = styled.div`
  height: 20vh;
  width: 100%;
  background: #c40007;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  width: 100%;
  max-width: 2100px;

  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  text-align: left;
  font-size: 20px;

  @media screen and (max-width: 868px) {
    text-align: center;
  }
  `;

export const FooterRight = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-size: 20px;

  @media screen and (max-width: 868px) {
    text-align: center;
  }
`;

export const FooterMsg = styled.div``;
