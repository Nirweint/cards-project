import {ThunkType} from "../types";
import {RootStateType} from "../store";
import {packsAPI} from "../../api";
import {setAppStatus} from "../actions/app";


export const getPacksOfCards = (): ThunkType => (dispatch, getState: () => RootStateType) => {
    const userId = getState().profile.profileData._id
    packsAPI.getPacks({})
        .then((res) => {

            // dispatch(someActionCards(res.data))
        })
        .catch((e: any) => {
            dispatch(setAppStatus('failed'))
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            console.log('Error', {...e})
        })
}