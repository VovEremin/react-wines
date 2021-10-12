import Search from "../Search";
import styled from "styled-components";
import Button from "../Button";
import plusIcon from '../../assets/img/plus.png'
import refreshIcon from '../../assets/img/refresh.png'
import {useAppDispatch} from "../../redux/hooks";
import {setIsOpen} from "../../redux/slices/modalSlice";
import {fetchWines} from "../../redux/slices/winesSlice";

interface IStyledControlsProps {
    content: string
    align: string
}

const StyledControls = styled.div<IStyledControlsProps>`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.content || 'space-between'};
`

export default function Controls () {
    const dispatch = useAppDispatch()

    function openForm () {
        dispatch(setIsOpen(true))
    }

    function refreshList () {
        dispatch(fetchWines(''))
    }

    return (
        <StyledControls content='space-between' align='flex-end'>
            <Search />
            <StyledControls content='center' align='center'>
                <Button iconUrl={refreshIcon} alt='Refresh list' clickHandler={refreshList} />
                <Button iconUrl={plusIcon} alt='Add new item' clickHandler={openForm} />
            </StyledControls>
        </StyledControls>
    )
}