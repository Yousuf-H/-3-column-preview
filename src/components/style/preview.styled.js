import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    }
`
export const Box = styled.div`
  height: 500px;
  width: 307px;
  background-color: ${prop => prop.bgColor};
  border-radius: ${props => props.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    height: 442px;
    border-radius: ${props => props.mobileBorder};
  }
`
export const InfoWrapper = styled.div`
    /* border: 2px white solid; */
    width: 200px;
    height: 390px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    @media only screen and (max-width: 480px) {
      width: '230px'
    }
`
export const Icon = styled.img`
  margin: 20px 0px;
`
export const Title = styled.h1`
  font-family: 'Big Shoulders Display', cursive;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: #F2F2F2;
  margin-top: 10px;
`
export const Info = styled.p`
  color: #fff;
  font-size: 15px;
  margin-top: 30px;
  line-height: 25px;
  font-weight: 300;
`
export const Button = styled.button`
  margin-top: 30px;
  border: none;
  width: 146px;
  height: 48px;
  font-size: 15px;
  background-color: #fff;
  color: ${props => props.bgColor};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  border: 1px #fff solid;
  // responsive
  @media only screen and (max-width: 480px) {
    bottom: '30px'
    }
  // hover
  &:hover {
    color: #fff;
    background-color: ${props => props.bgColor};
  }
`