import styled from "styled-components";

import ChatIcon from "../assets/icon-chat.png";
import MoneyIcon from "../assets/icon-money.png";
import SecurityIcon from "../assets/icon-security.png";

const StyledFeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
  // gap: 16px;
`;

const StyledFeatureItemIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
  // margin-bottom: 8px;
  overflow: clip;
`;

const StyledFeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  width: 100%;
`;

const StyledFeatureItemText = styled.p`
  text-align: center;
`;

const StyledFeatures = styled.section`
  display: flex;
  flex-direction: row;
`;

const Features = () => {
  return (
    <StyledFeatures>
      <StyledFeatureItem>
        <StyledFeatureItemIcon src={ChatIcon} alt="Chat icon" />
        <StyledFeatureItemTitle>You are our #1 priority</StyledFeatureItemTitle>
        <StyledFeatureItemText>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </StyledFeatureItemText>
      </StyledFeatureItem>
      <StyledFeatureItem>
        <StyledFeatureItemIcon src={MoneyIcon} alt="Money icon" />
        <StyledFeatureItemTitle>
          More savings means higher rates
        </StyledFeatureItemTitle>
        <StyledFeatureItemText>
          The more you save with us, the higher your interest rate will be!
        </StyledFeatureItemText>
      </StyledFeatureItem>
      <StyledFeatureItem>
        <StyledFeatureItemIcon src={SecurityIcon} alt="Security icon" />
        <StyledFeatureItemTitle>Security you can trust</StyledFeatureItemTitle>
        <StyledFeatureItemText>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </StyledFeatureItemText>
      </StyledFeatureItem>
    </StyledFeatures>
  );
};

export default Features;
