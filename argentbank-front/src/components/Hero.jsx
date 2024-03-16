import styled from "styled-components";
import HeroCoverImage from "../assets/bank-tree.jpeg";

const HeroContainer = styled.div`
  background-image: url(${HeroCoverImage});
  background-position: 0% 33%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  position: relative;
`;

const HeroContent = styled.section`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 300px;
  margin: 2rem;
  background-color: white;
  padding: 2rem;
  text-align: left;
`;

const HeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0;
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
      {/* <HeroCover src={HeroCoverImage} alt="" /> */}
    </HeroContainer>
  );
};
export default Hero;
