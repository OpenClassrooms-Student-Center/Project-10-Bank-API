import styled from "styled-components";
import HeroCoverImage from "../assets/bank-tree.jpeg";

const HeroContainer = styled.div`
  background-image: url(${HeroCoverImage});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroSubtitle>No fees.</HeroSubtitle>
        <HeroSubtitle>No minimum deposit.</HeroSubtitle>
        <HeroSubtitle>High interest rates.</HeroSubtitle>
        <HeroText>Open a savings account with Argent Bank today!</HeroText>
      </HeroContent>
    </HeroContainer>
  );
};
export default Hero;
