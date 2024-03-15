import styled from "styled-components";
import HeroCoverImage from "../assets/bank-tree.jpeg";

const HeroContainer = styled.div`
  // display: flex;
  width: 100%;
  position: relative;
  height: 400px;
`;

const HeroContent = styled.section`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 364px;
  margin: 2rem;
  background-color: white;
  padding: 2rem;
`;

const HeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const HeroText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const HeroCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // margin-top: 50px;
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
      <HeroCover src={HeroCoverImage} alt="" />
    </HeroContainer>
  );
};
export default Hero;
