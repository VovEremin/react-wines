import Header from "../components/Header";
import React, {useEffect} from "react";
import styled from "styled-components";
import Controls from "../components/Controls";
import Table from "../components/Table";
import {fetchWines} from "../redux/slices/winesSlice";
import {useAppDispatch} from "../redux/hooks";

const StyledHome = styled.div`
  margin: 0 180px;
  padding: 100px 0 50px;
  min-height: 100vh;
`

export default function Home () {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchWines(''))
        //eslint-disable-next-line
    }, [])

    return (
        <StyledHome>
            <Header />
            <Controls />
            <Table />
        </StyledHome>
    )
}