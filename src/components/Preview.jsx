import React from 'react'
import { Container, Wrapper, Box, InfoWrapper, Title, Info, Icon, Button } from './style/preview.styled'

const Preview = () => {
  return (
    <Container>
      <Wrapper>
        {/* Box one */}
        <Box bgColor='#E28625' borderRadius='8px 0px 0px 8px' mobileBorder='8px 8px 0px 0px'>
          <InfoWrapper>
            <Icon src='./images/icon-sedans.svg'/>
            <Title>Sedans</Title>
            <Info>
              Choose a sedan for its affordability 
              and excellent fuel economy. Ideal for 
              cruising in the city or on your next 
              road trip.
            </Info>
            <Button bgColor='#E28625'>Learn More</Button>
          </InfoWrapper>
        </Box>
        
        {/* Box Two */}
        <Box bgColor='#006971'>
        <InfoWrapper>
            <Icon src='./images/icon-suvs.svg'/>
            <Title>SUVs</Title>
            <Info>
              Take an SUV for its spacious interior, 
              power, and versatility. Perfect for your 
              next family vacation and off-road adventures.
            </Info>
            <Button bgColor='#006971'>Learn More</Button>
          </InfoWrapper>
        </Box>

        {/* Box Three */}
        <Box bgColor='#004140' borderRadius='0px 8px 8px 0px' mobileBorder='0px 0px 8px 8px'>
        <InfoWrapper>
            <Icon src='./images/icon-luxury.svg'/>
            <Title>Luxury</Title>
            <Info>
              Cruise in the best car brands without the 
              bloated prices. Enjoy the enhanced comfort 
              of a luxury rental and arrive in style.
            </Info>
            <Button bgColor='#004140'>Learn More</Button>
          </InfoWrapper>
        </Box>
        </Wrapper>
    </Container>
  )
}

export default Preview
