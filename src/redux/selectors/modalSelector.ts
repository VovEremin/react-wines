import {RootState} from "../store";

export const getModalStatus = (state: RootState) => {
    return state.modal.isOpen
}