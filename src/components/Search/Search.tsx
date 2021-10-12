import styled from "styled-components";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {debounce} from "../../helpers/debounce";
import {fetchWines} from "../../redux/slices/winesSlice";
import {useAppDispatch} from "../../redux/hooks";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`

const StyledInput = styled.input`
  padding: 9px 18px;
  font-size: 16px;
  border-radius: 20px;
  border: none;
  background-color: #fff;
  margin-left: 25px;
  transition: 0.2s all ease-in-out;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`

export default function Search () {
    const dispatch = useAppDispatch()

    const [value, setValue] = useState<string>('')

    //eslint-disable-next-line
    const loadWines = useCallback(
        debounce((value: string) => {
            dispatch(fetchWines(value))
        }, 500),
        []
    );

    useEffect(() => {
        if (value.trim()) {
            loadWines(value)
        } else  if(value.trim() === '') {
            loadWines('')
        }
        //eslint-disable-next-line
    }, [value]);

    return (
        <StyledWrapper>
            <StyledTitle>Search</StyledTitle>
            <StyledInput value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder='e.g. Australian Wines' />
        </StyledWrapper>
    )
}