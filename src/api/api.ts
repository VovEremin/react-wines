import axios from "axios";
import {IWine} from "../interfaceTypes/interfaceTypes";

export const winesAPI = {
    getWines(value: string) {
        return axios.get<IWine[]>(`/wines${value ? '?q=' + value : ''}`).then(response => response.data)
    }
}