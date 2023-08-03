// Style your components here
import styled from 'styled-components'

export const InputLabel = styled.label`
  font-size: 20px;
  color: #75858e;
`
export const Input = styled.input`
  width: 400px;
  height: 40px;
`
export const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  background-size: cover;

  height: 400px;
  margin: 40px;
  justify-content: center;
  background-image: ${props => `url(${props.backgroundImg})`};
`
export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  background-color: #0b69ff;
  color: #ffffff;
  margin-top: 10px;
  border-style: none;
  padding: 10px;
  width: 200px;
`
export const Heading = styled.h1`
  color: #35469c;
`
export const Paragraph = styled.p`
  color: #d7dfe9;
  text-align: center;
  font-size: ${props => `${props.fontSize}px`};
`
export const SelectInput = styled.select`
  width: 400px;
  height: 40px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
