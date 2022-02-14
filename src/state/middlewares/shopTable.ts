import {ThunkType} from "../types";
import {setAppStatus} from "../actions/app";
import {cardsAPI} from "../../api";

import {someActionCards} from "../actions/cards";

export const shopTableGet = (): ThunkType => dispatch => {
    cardsAPI.getShopTable()
        .then((res) => {

            dispatch(someActionCards(res.data))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}