import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(42, 42, 42, 0.5);
`

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
`

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid grey;
    font-size: 16px;
    transition: 0.2s all ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0px 6px 6px 0px rgba(34, 60, 80, 0.2);
    }
  }
`

export const FormControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin-left: 20px;
    background: transparent;
    border: 1px solid grey;
    transition: 0.2s all ease-in-out;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      cursor: pointer;
      transform: rotateZ(5deg);
    }
  }
  p {
    font-size: 18px;
    margin-right: 10px;
  }
  img {
    width: 25px;
  }
`

export const StyledError = styled.div`
  color: red;
  margin: 10px 0 0;
`

export const NumberInputWrapper = styled(InputWrapper)`
  position: relative;
  &::after {
    position: absolute;
    top: 12px;
    left: 160px;
    content: "€";
    font-size: 16px;
  }
  input {
    width: 150px;
  }
`
