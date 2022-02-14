import {instance} from "./config";


export const cardsAPI = {
    getShopTable(){
        return instance.get<ShopTableType>('cards/pack')
    }
}


export type ShopTableType = {
    cardPacks: CardPacksType[]
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
}

type CardPacksType = {
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}
