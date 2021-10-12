import drink from "../../../assets/img/drink.svg";
import {columnsName} from "../Table";
import styled from "styled-components";

const StyledTh = styled.th`
  position: relative;
  div {
    position: absolute;
    height: 70px;
    top: -75px;
    left: 2.5%;
    width: 95%;
    background-color: #fff;
    margin: 0 3px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    height: 35px;
  }
`

export default function Columns () {
    return (
        <tr>
            <StyledTh>
                <div>
                    <img src={drink} alt="drink"/>
                </div>
            </StyledTh>
            {
                columnsName.map((item: string, index: number) => {
                    return (
                        <StyledTh key={`${item}_${index}`}>
                            <div>{item}</div>
                        </StyledTh>
                    )
                })
            }
        </tr>
    )
}