import {ThunkType} from "../types";
import {setAppStatus} from "../actions/app";
import {cardsAPI} from "../../api";

import {someActionCards} from "../actions/cards";
import {RootStateType} from "../store";

export const shopTableGet = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    cardsAPI.getCards({cardsPack_id: ''})
        .then((res) => {

            dispatch(someActionCards(res.data))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}