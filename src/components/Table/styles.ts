import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  margin: 100px 40px 0;
  position: relative;
  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }

`

export const StyledTr = styled.tr`
  background-color: #fff;
  box-shadow: 0px -6px 4px -5px rgb(34 60 80 / 30%) inset;
  transition: 0.2s all ease-in-out;
  &:hover {
    box-shadow: 0px -7px 4px -5px rgb(34 60 80 / 30%) inset;
    td {
      &:first-child::after {
        box-shadow: 4px 0px 2px 0px rgb(34 60 80 / 30%) inset;
      }
      &:last-child::after {
        box-shadow: -4px 0px 2px 0px rgb(34 60 80 / 30%) inset;
      }
    }
  }
`

export const StyledTd = styled.td`
  font-size: 16px;
  line-height: 21px;
  vertical-align: middle;

  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: #4f4f4f;
      text-decoration: underline;
    }
  }

  div {
    padding: 15px;
    height: 55px;
    margin: 8px 0;
    border-left: 1px solid #cccbcb;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 85%;
    color: black;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.3;
    border-bottom: 1px solid grey;
  }

  &:first-child {
    position: relative;

    div {
      border-left: none;
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: -40px;
      height: 70px;
      width: 40px;
      background-color: #fff;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      box-shadow: 2px 0px 2px 0px rgb(34 60 80 / 30%) inset;
      transition: 0.2s all ease-in-out;
    }
  }

  &:last-child {
    border-right: none;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: -40px;
      height: 70px;
      width: 40px;
      background-color: #fff;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      box-shadow: -2px 0px 2px 0px rgb(34 60 80 / 30%) inset;
      transition: 0.2s all ease-in-out;
    }
  }

  img {
    width: 35px;
  }
`

export const TableText = styled.p`
  margin-top: 30px;
  font-size: 22px;
  line-height: 26px;
`