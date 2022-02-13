import {instance} from "./config";
import {AxiosResponse} from "axios";
import {ResponseType} from "./authAPI";

export const cardsAPI = {
    getShopTable(){
        return instance.get<ShopTableType>('cards/pack')
    }
}


export type ShopTableType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
}