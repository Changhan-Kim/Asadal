import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  padding: 7rem 2rem;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  @media screen and (max-width: 992px) {
    width: 100%;
    padding:1.5em;

  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    /* padding: 1rem; */
  }

`;

export const ContactWrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 992px) {
   display: flex;
   flex-direction: column;
    width: 100%;
    padding:1.5em;
 

  }

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    /* grid-template-columns: 1fr; */
    
  }

`;

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: -50px;

  @media screen and (max-width: 992px) {
margin-bottom: 2rem;
 

  }

  @media screen and (max-width: 768px) {
    /* margin-bottom: 2rem; */
    width: 100%;
    padding: 0;
    margin: 0 0 2rem 0;
    /* padding: 0 1rem; */


  }
`;

export const Logo = styled.img`
  width: 400px;

  @media screen and (max-width: 768px) {
    /* margin: rem 0; */
    margin-bottom: -1.5rem;
  }

`;

export const Paragraph = styled.p`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 1rem;
    text-align: center;
  }
`;

export const SectionRight = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  margin: auto auto;
  height: fit-content;
  background: #f7f8fc;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;


    @media screen and (max-width: 768px) {
      /* display: flex; */
      width: 100%;
      justify-content: center;
      /* padding: 0 0.5rem; */
      /* width: 100%; */
    /* margin: -2rem 0; */
  }

`;

export const Form = styled.form`
   height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15px;

  @media screen and (max-width: 768px) {
   padding: 0 1rem;
  }

`;

export const Input = styled.div`
  label {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
    font-size: 1.2rem;
    padding: 10px;
    border: 1px solid #ccc;
  }

  textarea {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 1.1rem;
  }



`;

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 1em;
  background: rgb(255, 203, 6);
  text-align: center !important;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;