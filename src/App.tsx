import React, {useEffect} from 'react';
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import {useAppSelector} from "./redux/hooks";
import {getModalStatus} from "./redux/selectors/modalSelector";
import {CSSTransition} from "react-transition-group";

const AppWrapper = styled.div`
  width: 100%;
  background: #ececec;
  font-family: sans-serif; 
  .wrapper-enter {
    opacity: 0;
  }
  .wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }
  .wrapper-exit {
    opacity: 1;
  }
  .wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
`

function App() {
    const modalStatus = useAppSelector(getModalStatus)

    useEffect(() => {
        if(modalStatus) document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [modalStatus])

    return (
        <AppWrapper>
            <Sidebar/>
            <Home/>
            <CSSTransition
                in={modalStatus}
                timeout={200}
                classNames="wrapper"
                unmountOnExit
            >
                <Modal/>
            </CSSTransition>
        </AppWrapper>
    );
}

export default App;
