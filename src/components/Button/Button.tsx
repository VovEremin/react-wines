import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-left: 20px;
  height: 80px;
  width: 80px;
  border: none;
  background-color: #fff;
  transition: 0.2s all ease-in-out;
  img {
    width: 35px;
    height: 35px;
  }
  &:hover {
    cursor: pointer;
    transform: rotateZ(15deg);
  }
`

interface IButtonProps {
    iconUrl: string
    alt: string
    clickHandler: () => void
}

export default function Button ({iconUrl, alt, clickHandler}: IButtonProps) {
    return (
        <StyledButton onClick={clickHandler}>
            <img src={iconUrl} alt={alt} />
        </StyledButton>
    )
}